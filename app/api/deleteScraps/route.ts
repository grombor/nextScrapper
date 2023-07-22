import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';
 
export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No valid array of scrap ids provided for deletion.' });
    }

    const deleteResults = await Promise.all(
      ids.map(async (id) => {
        const scrap = await prisma.scrap.findUnique({
          where: {
            id: String(id),
          },
        });

        if (!scrap) {
          return { id, deleted: false };
        }

        // await prisma.scrap.delete({
        //   where: {
        //     id: String(id),
        //   },
        // });

        return { id, deleted: true };
      })
    );

    const deletedIds = deleteResults.filter((result) => result.deleted).map((result) => result.id);
    const notFoundIds = deleteResults.filter((result) => !result.deleted).map((result) => result.id);

    return NextResponse.json({
      message: 'Scrap deletion results',
      deletedIds,
      notFoundIds,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' });
  }
}
import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';
 
export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'No valid scrap id provided for deletion.' });
    }

    console.log(id)

    // const scrap = await prisma.scrap.findUnique({
    //   where: {
    //     id: String(id),
    //   },
    // });

    // if (!scrap) {
    //   return NextResponse.json({ data: { id, deleted: false }, message: 'Scrap deletion result' });
    // }

    // await prisma.scrap.delete({
    //   where: {
    //     id: String(id),
    //   },
    // });

    // return NextResponse.json({ data: { id, deleted: true }, message: 'Scrap deletion result' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' });
  }
}

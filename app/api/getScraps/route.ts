import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
 
export async function GET() {
  const prisma = new PrismaClient();

  try {
    const scraps = await prisma.scrap.findMany({
      include: {
        selectors: true,
      },
    });

    if (scraps.length === 0) {
      return NextResponse.json({ message: 'No entries found in the database.' }, { status: 404 });
    }

    return NextResponse.json({ data: scraps });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { fetchData } from '../../core/prismaHelpers';
import { scrapWebsite } from '../../core/scraperCore';

export async function POST(res: NextResponse) {
  const prisma = new PrismaClient();

  try {
    const { ids } = await res.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({
        error: 'No valid array of scrap ids provided for deletion.',
      });
    }

    const fetchResults = await fetchData(ids);

    const scrapResults = await Promise.all(
      fetchResults.map(async (item) => {
        console.log(item);
        if (item.url && item.url && item.selectors.length > 0) {
          const scrapResultsesults = await scrapWebsite(
            item.url,
            item.selectors
          );
          console.log(scrapResultsesults);
          return scrapResultsesults;
        }
        return [];
      })
    );

    return NextResponse.json({ data: scrapResults });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchData(ids) {
  const scrapResults = await Promise.all(
    ids.map(async (id) => {
      const scrap = await prisma.scrap.findUnique({
        where: {
          id: String(id),
        },
        include: {
          selectors: true,
        },
      });
      if (scrap) {
        return scrap;
      } else {
        return null;
      }
    })
  );

  return scrapResults;
}
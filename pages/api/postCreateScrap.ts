// api/createScrap.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface SelectorInput {
  uuid: string;
  name: string;
  selector: string;
  value: string;
  isChecked: boolean;
  scrapId: string;
}

interface ScrapData {
  uuid: string;
  name: string;
  createdDate?: string;
  lastModifiedDate?: string;
  isChecked?: boolean;
  author?: string;
  scraps: {
    url: string;
    selectors: SelectorInput[];
  }[];
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const {
      name,
      createdDate = new Date().toISOString(),
      lastModifiedDate = new Date().toISOString(),
      isChecked = false,
      author = 'admin',
      scraps,
    } = req.body as ScrapData;

    // Create a new Scrap with data from req.body
    const newScrap = await prisma.scrap.create({
      data: {
        name,
        createdDate: new Date(createdDate),
        lastModifiedDate: new Date(lastModifiedDate),
        isChecked,
        author,
      },
    });

    // Map scraps to an array with additional information about Scrap
    const selectorData: SelectorInput[] = [];
    scraps.forEach((scrap) => {
      scrap.selectors.forEach((selector) => {
        selectorData.push({
          ...selector,
          scrapId: newScrap.id, // Add scrapId to each selector
        });
      });
    });

    // Add Selectors to Scrap using createMany in prisma
    await prisma.selector.createMany({
      data: selectorData,
    });

    return res.status(201).json(newScrap);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

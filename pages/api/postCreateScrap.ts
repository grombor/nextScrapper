// api/postCreateScrap.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface SelectorInput {
  name: string;
  selector: string;
  value?: string;
  isChecked: boolean;
}

interface ScrapData {
  name: string;
  createdDate?: string;
  lastModifiedDate?: string;
  isChecked?: boolean;
  author?: string;
  url: string;
  selectors: SelectorInput[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Request method is not supported.' });
  }

  try {
    const {
      name,
      createdDate = new Date().toISOString(),
      lastModifiedDate = new Date().toISOString(),
      isChecked = false,
      author = 'admin',
      url,
      selectors,
    } = req.body as ScrapData;

    if (!Array.isArray(selectors)) {
      return res.status(400).json({ error: 'Invalid or missing array of selectors.' });
    }

    // Przypisz puste stringi do pola "value" w przypadku braku wartości w "req.body"
    const sanitizedSelectors = selectors.map((selector) => ({
      ...selector,
      value: selector.value || '',
    }));

    const newScrap = await prisma.scrap.create({
      data: {
        name,
        createdDate: new Date(createdDate),
        lastModifiedDate: new Date(lastModifiedDate),
        isChecked,
        author,
        url,
        selectors: {
          create: sanitizedSelectors,
        },
      },
    });

    return res.status(201).json(newScrap);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

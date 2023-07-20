// api/deleteScrap.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Request method is not supported.' });
  }

  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid or missing array of scrap ids to delete.' });
    }

    // Find all Scrap entries with the provided ids and include associated selectors
    const scraps = await prisma.scrap.findMany({
      where: {
        id: {
          in: data.map(String),
        },
      },
      include: {
        scrapsData: true,
      },
    });

    if (scraps.length === 0) {
      return res.status(404).json({ error: 'No scraps found with the provided ids.' });
    }

    return res.status(200).json({ data: scraps });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

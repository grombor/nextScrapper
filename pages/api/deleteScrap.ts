// api/deleteScrap.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Request method is not supported.' });
  }

  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'No scrap id provided for deletion.' });
    }

    const scrap = await prisma.scrap.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!scrap) {
      return res.status(404).json({ error: 'Scrap with the provided id does not exist.' });
    }

    await prisma.scrap.delete({
      where: {
        id: String(id),
      },
    });

    return res.status(200).json({ message: 'Scrap has been successfully deleted.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

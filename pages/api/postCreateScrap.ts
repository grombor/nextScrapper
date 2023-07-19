// api/createScrap.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'The request method is not supported.' });
  }

  try {
    const { name } = req.body;
    const newScrap = await prisma.scrap.create({
      data: {
        name,
      },
    });

    return res.status(201).json(newScrap);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

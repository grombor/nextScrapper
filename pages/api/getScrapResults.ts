import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { uuids } = req.body;

    if (!Array.isArray(uuids) || uuids.length === 0) {
      return res.status(400).json({ error: 'Brak poprawnej tablicy UUIDs w ciele żądania' });
    }

    const foundUUIDs = ['d039a4cb-c61d-4b78-b689-d3ac8d1dd188']; // Przykładowa tablica znalezionych UUIDs

    const results = uuids.map((uuid) => {
      return foundUUIDs.includes(uuid)
        ? { uuid, message: 'Znaleziono UUID' }
        : { uuid, message: 'Nie znaleziono UUID' };
    });

    return res.status(200).json(results);
  }

  return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
}

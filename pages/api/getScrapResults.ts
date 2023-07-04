// TODOS:
// - uruchomienie fukcji scrapujacej dla kazdego elementu w grupie
// - przypisanie wyniiku fukcji scrapujaej dla parametru value

import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { uuids } = req.body;

    if (!Array.isArray(uuids) || uuids.length === 0) {
      return res
        .status(400)
        .json({ error: 'Brak poprawnej tablicy UUIDs w ciele żądania' });
    }

    const results = uuids.map((uuid) => {
      const foundObject = data.find((group) => group.uuid === uuid);

      return foundObject
        ? foundObject
        : { uuid, message: 'Nie znaleziono UUID' };
    });

    return res.status(200).json(results);
  }

  return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
}

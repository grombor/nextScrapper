// TODOS:
// - uruchomienie fukcji scrapujacej dla kazdego elementu w grupie
// - przypisanie wyniiku fukcji scrapujaej dla parametru value

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { results } = req.body;

    console.log(results)

    return res.status(200).json(results);
  }

  return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
}

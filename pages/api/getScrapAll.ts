import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
    }

    const data: Array<{ name: string; url: string; selector: string; value: string; }> = [
      {
        name: "name1",
        url: "https://www.google.co.uk/",
        selector: "title",
        value: ''
      },
      {
        name: "name2",
        url: "https://www.onet.pl/",
        selector: "title",
        value: ''
      }
    ];

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

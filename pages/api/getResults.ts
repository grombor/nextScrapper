import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest, NextApiResponse } from 'next';

const data: Array<{
  uuid: string;
  name: string;
  url: string;
  selector: string;
  value: string;
  isChecked: boolean;
}> = [
  {
    uuid: "83617c77-1450-4764-af67-3a0b98b74a3b",
    name: "name1",
    url: "https://www.google.co.uk/",
    selector: "title",
    value: 'value1',
    isChecked: true,
  },
  {
    uuid: "fddd59e5-f71d-416a-bd92-18ad252a2d83",
    name: "name2",
    url: "https://www.onet.pl/",
    selector: "title",
    value: 'value2',
    isChecked: false,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { uuids } = req.body;

    if (!Array.isArray(uuids) || uuids.length === 0) {
      return res.status(400).json({ error: 'Brak poprawnej tablicy UUIDs w ciele żądania' });
    }

    const results = uuids.map((uuid) => {
      const result = data.find((item) => item.uuid === uuid);
      return result || { uuid, error: 'Nie znaleziono wyniku o podanym UUID' };
    });

    return res.status(200).json(results);
  }

  return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
}

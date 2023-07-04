import { NextApiRequest, NextApiResponse } from 'next';
import { data } from './data';

interface Scrap {
  uuid: string;
  name: string;
  url: string;
  selector: string;
  value: string;
  isChecked: boolean;
}

interface Group {
  name: string;
  uuid: string;
  scraps: Scrap[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { uuids } = req.body;

    if (!Array.isArray(uuids) || uuids.length === 0) {
      return res.status(400).json({ error: 'Brak poprawnej tablicy UUIDs w ciele żądania' });
    }

    const results: Group[] = [];

    data.forEach((group: Group) => {
      const groupResult: Group = {
        name: group.name,
        uuid: group.uuid,
        scraps: [],
      };

      group.scraps.forEach((scrap: Scrap) => {
        if (uuids.includes(scrap.uuid)) {
          groupResult.scraps.push(scrap);
        }
      });

      if (groupResult.scraps.length > 0) {
        results.push(groupResult);
      }
    });

    return res.status(200).json(results);
  }

  return res.status(405).json({ error: 'Metoda żądania nie jest obsługiwana' });
}

import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

interface ScrapResult {
  uuid: string;
  selector: string;
  value: string;
  isChecked: boolean;
}

interface ScrapSelector {
  uuid: string;
  selector: string;
  isChecked: boolean;
}

interface ScrapDataResult {
  uuid: string;
  name: string;
  url: string;
  isChecked: boolean;
  selectors: ScrapResult[];
}

export default async function scrapData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url, selectors }: { url: string; selectors: ScrapSelector[] } = req.body;

    const response = await axios.post(url, { selectors });
    const html = response.data;
    const $ = cheerio.load(html);

    const results: ScrapDataResult[] = selectors.map((selector) => {
      const { uuid, selector: selectorString, isChecked } = selector;
      const value = $(selectorString).text();

      const scrapResult: ScrapResult = {
        uuid,
        selector: selectorString,
        value,
        isChecked: Boolean(isChecked),
      };

      return {
        uuid,
        name: 'name1', // Zastąp nazwą odpowiadającą grupie lub dostosuj w zależności od kontekstu
        url,
        isChecked: Boolean(isChecked),
        selectors: [scrapResult],
      };
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

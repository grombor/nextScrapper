import { NextApiRequest, NextApiResponse } from 'next';
import scrapData from '../scraper';

interface Result {
  error?: string;
  result?: string | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Przesłane dane nie są poprawną tablicą obiektów' });
    }

    const results: Result[] = [];

    for (const item of data) {
      const { url, selector } = item;

      console.log('URL:', url);
      console.log('Selektor:', selector);

      if (!url || !selector) {
        results.push({ error: 'Brak wymaganych parametrów: url i selector' });
        continue;
      }

      const selectedElement = await scrapData(url, selector);

      results.push({ result: selectedElement });
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

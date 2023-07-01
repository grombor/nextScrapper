import cheerio from 'cheerio';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface Result {
  error?: string;
  result?: string;
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

      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const selectedElement = $(selector).text();

      results.push({ result: selectedElement });
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

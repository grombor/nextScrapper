import cheerio from 'cheerio';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url, selector } = req.body;

    console.log('URL:', url);
console.log('Selektor:', selector);

    if (!url || !selector) {
      return res.status(400).json({ error: 'Brak wymaganych parametrów: url i selector' });
    }

    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const selectedElement = $(selector).text();

    res.status(200).json({ result: selectedElement });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

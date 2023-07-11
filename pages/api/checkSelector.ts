import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeValueFromWebsite } from '../scraper'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url, selector } = req.body;

    if (!url || !selector) {
      return res.status(400).json({ error: 'Brak wymaganych parametrów: url i selector' });
    }

    const response = await scrapeValueFromWebsite(url, selector)

    res.status(200).json({ result: response });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

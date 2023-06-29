import cheerio from 'cheerio';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://www.google.co.uk/');
    const html = response.data;
    const $ = cheerio.load(html);
    const pageTitle = $('title').text();

    res.status(200).json({ title: pageTitle });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

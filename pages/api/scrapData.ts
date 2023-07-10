/**
 * Scrapuje dane z podanej strony internetowej na podstawie dostarczonych selektorów.
 * @param {NextApiRequest} req - Obiekt NextApiRequest reprezentujący żądanie HTTP.
 * @param {NextApiResponse} res - Obiekt NextApiResponse reprezentujący odpowiedź HTTP.
 * @returns {Promise<void>} - Promise bez wartości zwracanej.
 *
 * @example
 * // Przykładowy request
 * // POST /api/scrapData
 * // {
 * //   "url": "https://www.example.com",
 * //   "selectors": [
 * //     {
 * //       "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
 * //       "name": "Header",
 * //       "selector": "h1",
 * //       "isChecked": true
 * //     },
 * //     {
 * //       "uuid": "e62de0ab-79ae-4c80-ac2a-b6a9986090f5",
 * //       "name": "Paragraph",
 * //       "selector": "p",
 * //       "isChecked": false
 * //     }
 * //   ]
 * // }
 *
 * @throws {Error} - Jeśli wystąpi błąd podczas scrapowania danych.
 */



import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

interface ScrapResult {
  uuid: string;
  name: string;
  selector: string;
  isChecked: boolean;
}

interface ScrapSelector {
  uuid: string;
  name: string;
  selector: string;
  isChecked: boolean;
}

interface ScrapDataRequest {
  url: string;
  selectors: ScrapSelector[];
}

interface ScrapDataResult {
  url: string;
  selectors: ScrapResult[];
}

export default async function scrapData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url, selectors }: ScrapDataRequest = req.body;

    const response = await axios.post(url, { selectors });
    const html = response.data;
    const $ = cheerio.load(html);

    const results: ScrapResult[] = selectors.map((selector) => {
      const { uuid, name, selector: selectorString, isChecked } = selector;
      const value = $(selectorString).text();

      const scrapResult: ScrapResult = {
        uuid,
        name,
        selector: selectorString,
        isChecked: Boolean(isChecked),
      };

      return scrapResult;
    });

    const dataResult: ScrapDataResult = {
      url,
      selectors: results,
    };

    res.json(dataResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

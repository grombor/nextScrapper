import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeValueFromWebsite } from '../scraper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'The request method is not supported.' });
  }

  try {
    const {
      uuid,
      name,
      createdDate,
      lastModifiedDate,
      isChecked,
      author,
      scraps,
    } = req.body;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate();

    const results: {
      uuid: string;
      name: string;
      createdDate: string;
      lastModifiedDate: string;
      isChecked: boolean;
      author: string;
      scraps: { url: string; selectors: string[] }[];
    } = {
      uuid,
      name,
      createdDate,
      lastModifiedDate: currentDate.toLocaleString(),
      isChecked,
      author,
      scraps: [],
    };

    const scrapedValues = await Promise.all(
      scraps.map(async (scrap) => {
        const { url, selectors } = scrap;
        const scrapedValue: string[] = await scrapeValueFromWebsite(
          url,
          selectors
        );
        return {
          url,
          selectors: scrapedValue,
        };
      })
    );

    results.scraps = scrapedValues;

    if (!results) {
      return res.status(400).json({ error: 'Invalid request. No input.' });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}

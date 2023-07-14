import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeValueFromWebsite } from '../scraper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Request method is not supported.' });
  }

  try {
    const scraps = req.body.scraps;
    let results = null;

    await Promise.all(
      scraps.map(async (scrap) => {
        const { url, selectors } = scrap;
        const scrapedValue = await scrapeValueFromWebsite(url, selectors);
        results = scrapedValue;
        return results;
      })
    );

    if (!results) {
      return res
        .status(400)
        .json({ error: 'Invalid request. Missing input data.' });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

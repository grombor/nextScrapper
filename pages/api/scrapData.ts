import { scrapeValueFromWebsite } from '../scraper';

export default async function scrapData(req, res) {
  try {
    if (req.method !== 'POST') {
      return res
        .status(405)
        .json({ error: 'The request method is not supported' });
    }

    const { url, selectors } = req.body;

    const results = await scrapeValueFromWebsite(url, selectors)

    const dataResult = {
      url,
      selectors: results,
    };

    res.json(dataResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

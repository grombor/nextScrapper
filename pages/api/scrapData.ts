/**
 * Scrapuje dane z podanej strony internetowej na podstawie dostarczonych selektorów.
 * @param {Object} req - Obiekt reprezentujący żądanie HTTP.
 * @param {Object} res - Obiekt reprezentujący odpowiedź HTTP.
 * @returns {Promise<void>} - Promise bez wartości zwracanej.
 * @throws {Error} - Jeśli wystąpi błąd podczas scrapowania danych.
 */


import { scrapeValueFromWebsite } from '../scraper';

export default async function scrapData(req, res) {
  try {
    const { url, selectors } = req.body;

    const results = await Promise.all(
      selectors.map(async (selector) => {
        const { uuid, name, selector: selectorString, isChecked } = selector;
        const value = await scrapeValueFromWebsite(url, selectorString);

        return {
          uuid,
          name,
          selector: selectorString,
          isChecked: Boolean(isChecked),
          value,
        };
      })
    );

    const dataResult = {
      url,
      selectors: results,
    };

    res.json(dataResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

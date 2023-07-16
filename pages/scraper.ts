import axios from 'axios';
import cheerio from 'cheerio';
import { applyFormatRules } from '../pages/formatRules'

export async function scrapeValueFromWebsite(url, selectors) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const results = selectors.map((selector) => {
      const { uuid, name, selector: selectorString, value: newValue, isChecked } = selector;
      let scrapedValue = applyFormatRules($(selectorString).text());

      if (newValue !== "") {
        scrapedValue = newValue
      }

      return {
        uuid,
        name,
        selector: selectorString,
        value: scrapedValue,
        isChecked: Boolean(isChecked),
      };
    });

    return results
  } catch (error) {
    console.error(error);
    return null;
  }
}

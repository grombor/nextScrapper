import axios from 'axios';
import cheerio from 'cheerio';
import { applyFormatRules } from '../pages/formatRules'

export async function scrapeValueFromWebsite(url, selectors) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const results = selectors.map((selector) => {
      const { uuid, name, selector: selectorString, isChecked } = selector;
      let value = applyFormatRules($(selectorString).text());

      return {
        uuid,
        name,
        selector: selectorString,
        value,
        isChecked: Boolean(isChecked),
      };
    });

    return results.filter((result) => result.value !== '');
  } catch (error) {
    console.error(error);
    return null;
  }
}

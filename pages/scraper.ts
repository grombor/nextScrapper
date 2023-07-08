import axios from 'axios';
import cheerio from 'cheerio';

export default async function scrapData(url: string, selector: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const value = $(selector).text();
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
}

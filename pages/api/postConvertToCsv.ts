import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';

export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { uuid, name, createdDate, lastModifiedDate, isChecked, author, scraps } = req.body;
    let scrapsArray = scraps;

    const csvData: Record<string, string>[] = [];
    const csvFields = [
      { id: 'name', title: 'Name' },
      { id: 'dealer', title: 'Dealer' },
      { id: 'manufacturer', title: 'Manufacturer' },
      { id: 'month_of_year', title: 'Month' },
      { id: 'year', title: 'Year' },
      { id: 'model', title: 'Model' },
      { id: 'substitute', title: 'Substitute' },
      { id: 'catalogue_price_nett', title: 'Catalogue Price Nett' },
      { id: 'shop_price_nett', title: 'Shop Price Nett' },
      { id: 'product_height', title: 'Product Height' },
      { id: 'product_width', title: 'Product Width' },
      { id: 'product_depth', title: 'Product Depth' },
      { id: 'product_features', title: 'Product Features' },
      { id: 'product_card_link', title: 'Product Card Link' },
      { id: 'lead_time', title: 'Lead Time' },
      { id: 'product_warranty', title: 'Product Warranty' },
      { id: 'comment', title: 'Comment' },
    ];

    if (!Array.isArray(scrapsArray)) {
      scrapsArray = [scrapsArray];
    }

    for (const scrap of scrapsArray) {
      const csvRow: Record<string, string> = {
        name: '',
        dealer: '',
        manufacturer: '',
        month_of_year: '',
        year: '',
        model: '',
        substitute: '',
        catalogue_price_nett: '',
        shop_price_nett: '',
        product_height: '',
        product_width: '',
        product_depth: '',
        product_features: '',
        product_card_link: '',
        lead_time: '',
        product_warranty: '',
        comment: ''
      };

      if (scrap.selectors && Array.isArray(scrap.selectors)) {
        for (const selector of scrap.selectors) {
          switch (selector.name) {
            case 'name':
              csvRow.name = selector.value;
              break;
            case 'dealer':
              csvRow.dealer = selector.value;
              break;
            case 'manufacturer':
              csvRow.manufacturer = selector.value;
              break;
            case 'month':
              csvRow.month_of_year = selector.value;
              break;
            case 'year':
              csvRow.year = selector.value;
              break;
            case 'model':
              csvRow.model = selector.value;
              break;
            case 'substitute':
              csvRow.substitute = selector.value;
              break;
            case 'cataloguePriceNett':
              csvRow.catalogue_price_nett = selector.value;
              break;
            case 'shopPriceNett':
              csvRow.shop_price_nett = selector.value;
              break;
            case 'productHeight':
              csvRow.product_height = selector.value;
              break;
            case 'productWidth':
              csvRow.product_width = selector.value;
              break;
            case 'productDepth':
              csvRow.product_depth = selector.value;
              break;
            case 'productFeatures':
              csvRow.product_features = selector.value;
              break;
            case 'productCardLink':
              csvRow.product_card_link = selector.value;
              break;
            case 'leadTime':
              csvRow.lead_time = selector.value;
              break;
            case 'productWarranty':
              csvRow.product_warranty = selector.value;
              break;
            case 'comment':
              csvRow.comment = selector.value;
              break;
            default:
              break;
          }
        }
      }

      csvData.push(csvRow);
    }

    const csvWriter = createObjectCsvWriter({
      path: `./public/csv/${uuid}.csv`,
      header: csvFields
    });

    csvWriter.writeRecords(csvData)
      .then(() => {
        const fileName = `${uuid}.csv`;
        const fileContent = fs.readFileSync(`./public/csv/${fileName}`);
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'text/csv');
        res.status(200).send(fileContent);
      })
      .catch((error: any) => {
        console.error('Błąd generowania pliku CSV:', error);
        res.status(500).end();
      });
  } else {
    res.status(405).end();
  }
}

const rawData = `{
  "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
  "name": "Site XYZ",
  "createdDate": "2023-07-14T11:15:00Z",
  "lastModifiedDate": "2023-07-14T11:15:00Z",
  "isChecked": false,
  "author": "Bard",
  "scraps": [
    {
      "url": "https://www.example.com",
      "selectors": [
        {
          "uuid": "3a1e98b8-173c-4a5c-bbc1-125812212e36",
          "name": "name",
          "selector": "product-name",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "e8b9987f-bfbb-4c0c-bc35-7d95a0e10543",
          "name": "dealer",
          "selector": "dealer-name",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "f8c43215-b249-4d8e-b9b1-12f6a88335a5",
          "name": "manufacturer",
          "selector": "manufacturer-name",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "90e714bb-1a17-492f-bdf1-8c5d70db1620",
          "name": "month",
          "selector": "month",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "dfc58a3a-79d3-4ab5-89d0-0e68a26ac6a1",
          "name": "year",
          "selector": "year",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "e9f5822a-3e62-42db-bb20-6ab1c53d875c",
          "name": "model",
          "selector": "model",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "172be69a-1609-454f-b21c-739d4ae2b4d4",
          "name": "substitute",
          "selector": "substitute",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "5e518e6e-518b-4e17-aa4a-c8f57fd61b6a",
          "name": "cataloguePriceNett",
          "selector": "catalogue_price_nett",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "90f9c1b2-7084-4d64-b5d7-66ed2327e5e3",
          "name": "shopPriceNett",
          "selector": "shop_price_nett",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "d14ff67f-557d-42f1-8a14-167915f1fbad",
          "name": "productHeight",
          "selector": "product_height",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "e47fabb0-6aae-4f7a-8fd3-58b3b2b6418f",
          "name": "productWidth",
          "selector": "product_width",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "c58d8cbf-b654-41ce-a536-9fc82599fc5d",
          "name": "productDepth",
          "selector": "product_depth",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "758ce536-829f-4b55-a1f5-0f0e349c5371",
          "name": "productFeatures",
          "selector": "product_features",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "9fd64115-8d71-4c0b-b7c2-672e6bda71e9",
          "name": "productCardLink",
          "selector": "product_card_link",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "d799d5b4-3ef5-4986-bd67-6b6768c8e81d",
          "name": "leadTime",
          "selector": "lead_time",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "32a6a0f9-d3b6-4a11-8659-33b09b0f97a9",
          "name": "productWarranty",
          "selector": "product_warranty",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "1d7e9af9-16b6-4d33-bc54-1798b0a32e20",
          "name": "comment",
          "selector": "comment",
          "value": "",
          "isChecked": true
        }
      ]
    }
  ]
}
`;

export const data = JSON.parse(rawData);

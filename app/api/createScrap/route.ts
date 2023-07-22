/**
 * Endpoint handling the creation of a new scrap entry in the database.
 * @function
 * @async
 * @param {NextRequest} req - The Next.js request object containing the new scrap data.
 * @returns {Promise<NextResponse>} A JSON response containing the newly created scrap entry.
 
Examples

Request:
{
  "name": "Site XYZ",
  "createdDate": "2023-07-14T11:15:00Z",
  "lastModifiedDate": "2023-07-14T11:15:00Z",
  "isChecked": false,
  "author": "John Doe",
  "url": "https://example.com",
  "selectors": [
    {
      "name": "selector1",
      "selector": ".selector1",
      "value": "Value 1",
      "isChecked": true
    },
    {
      "name": "selector2",
      "selector": ".selector2",
      "value": "Value 2",
      "isChecked": false
    }
  ]
}

Response:
{
  "data": {
    "id": "abc123",
    "name": "Site XYZ",
    "createdDate": "2023-07-14T11:15:00.000Z",
    "lastModifiedDate": "2023-07-14T11:15:00.000Z",
    "isChecked": false,
    "author": "John Doe",
    "url": "https://example.com",
    "selectors": [
      {
        "id": "sel123",
        "name": "selector1",
        "selector": ".selector1",
        "value": "Value 1",
        "isChecked": true
      },
      {
        "id": "sel456",
        "name": "selector2",
        "selector": ".selector2",
        "value": "Value 2",
        "isChecked": false
      }
    ]
  }
}

In this example, the endpoint handles the creation of a new scrap entry in the database. The request should be a POST request to the /api/createScrap endpoint with a JSON payload containing the necessary scrap data, including name, createdDate, lastModifiedDate, isChecked, author, url, and an array of selectors. If any selectors in the array do not have a value specified, the default value will be an empty string. The response contains the newly created scrap entry with all its properties, including the generated id. If an error occurs during the database operation, a 500 response is returned with the message "Server error."

*/

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      createdDate = new Date().toISOString(),
      lastModifiedDate = new Date().toISOString(),
      isChecked = false,
      author = 'admin',
      url,
      selectors,
    } = await req.json();

    if (!Array.isArray(selectors)) {
      return NextResponse.json({
        error: 'Invalid or missing array of selectors.',
      });
    }

    const newSelectors = selectors.map((selector) => ({
      ...selector,
      value: selector.value || '',
    }));

    const newScrap = await prisma.scrap.create({
      data: {
        name,
        createdDate: new Date(createdDate),
        lastModifiedDate: new Date(lastModifiedDate),
        isChecked,
        author,
        url,
        selectors: {
          create: newSelectors,
        },
      },
    });

    return NextResponse.json({
      data: newScrap,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' });
  }
}

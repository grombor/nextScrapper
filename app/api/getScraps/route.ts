/**
 * Endpoint handling the deletion of multiple entries from the database.
 * @function
 * @async
 * @param {NextRequest} req - A POST HTTP request containing a JSON object with an array of scrap ids to delete.
 * @returns {Promise<NextResponse>} A JSON response containing the result of the scrap deletion operation.
 
Examples
Request:
POST /api/deleteScraps
{
  "ids": ["abc123", "def456", "ghi789"]
}

Response:
{
  "data": {
    "deletedIds": ["abc123", "ghi789"],
    "notFoundIds": ["def456"]
  },
  "message": "Scrap deletion results"
}

In this example, entries with ids "abc123" and "ghi789" were successfully deleted from the database, while the entry with id "def456" was not found and was not deleted. The response contains information about the result of the deletion operation, including the deleted ids and the ids of entries that were not found.

*/


import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
 
export async function GET() {
  const prisma = new PrismaClient();

  try {
    const scraps = await prisma.scrap.findMany({
      include: {
        selectors: true,
      },
    });

    if (scraps.length === 0) {
      return NextResponse.json({ message: 'No entries found in the database.' }, { status: 404 });
    }

    return NextResponse.json({ data: scraps });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
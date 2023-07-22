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

import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';
 
export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No valid array of scrap ids provided for deletion.' });
    }

    const deleteResults = await Promise.all(
      ids.map(async (id) => {
        const scrap = await prisma.scrap.findUnique({
          where: {
            id: String(id),
          },
        });

        if (!scrap) {
          return { id, deleted: false };
        }

        await prisma.scrap.delete({
          where: {
            id: String(id),
          },
        });

        return { id, deleted: true };
      })
    );

    const deletedIds = deleteResults.filter((result) => result.deleted).map((result) => result.id);
    const notFoundIds = deleteResults.filter((result) => !result.deleted).map((result) => result.id);

    return NextResponse.json({
      data: {
        deletedIds,
        notFoundIds,
      },
      message: 'Scrap deletion results',
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' });
  }
}
/**
 * Zwraca grupę o identyfikatorze UUID.
 *
 * @param {string} uuid Identyfikator UUID grupy.
 * @returns {Response} Odpowiedź HTTP z grupą.
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      return res
        .status(405)
        .json({ error: 'Metoda żądania nie jest obsługiwana' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
}

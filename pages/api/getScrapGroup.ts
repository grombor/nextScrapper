// TODOS:
// - uruchomienie fukcji scrapujacej dla kazdego elementu w grupie
// - przypisanie wyniiku fukcji scrapujaej dla parametru value

// Propozycje nazw testów do dopisania do tego kodu w Postmanie:

// Test metody POST - Sprawdza, czy żądanie z metodą POST zwraca poprawny kod odpowiedzi.
// Test metody innego niż POST - Sprawdza, czy żądanie z metodą inną niż POST zwraca kod odpowiedzi 405.
// Test żądania bez ciała - Sprawdza, czy żądanie bez ciała zwraca kod odpowiedzi 400 i odpowiedni komunikat o błędzie.
// Test żądania z prawidłowymi danymi - Sprawdza, czy żądanie z prawidłowymi danymi zwraca kod odpowiedzi 200 i zwraca oczekiwane wyniki.
// W Postmanie można przeprowadzić następujące testy:

// Wykonanie żądania POST z poprawnymi danymi - Upewnij się, że otrzymujesz kod odpowiedzi 200 i oczekiwane wyniki.
// Wykonanie żądania z inną metodą niż POST - Sprawdź, czy otrzymujesz kod odpowiedzi 405.
// Wykonanie żądania POST bez ciała - Upewnij się, że otrzymujesz kod odpowiedzi 400 i odpowiedni komunikat o błędzie.
// Wykonanie żądania POST z nieprawidłowymi danymi - Sprawdź, czy otrzymujesz kod odpowiedzi 200, ale z oczekiwanymi danymi błędu lub komunikatem o błędzie.
// Pamiętaj, aby dostosować dane testowe do konkretnych przypadków i upewnić się, że testujesz różne scenariusze i przypadki graniczne.

import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeValueFromWebsite } from '../scraper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Metoda żądania nie jest obsługiwana.' });
  }

  try {
    const scraps = req.body.scraps;
    let results = null;

    await Promise.all(
      scraps.map(async (scrap) => {
        const { url, selectors } = scrap;
        const scrapedValue = await scrapeValueFromWebsite(url, selectors);
        results = scrapedValue;
        return results;
      })
    );

    if (!results) {
      return res
        .status(400)
        .json({ error: 'Nieprawidłowe żądanie. Brak danych wejściowych.' });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Błąd serwera.' });
  }
}

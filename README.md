TODOs:
- [x] Jako użytkownik chciałbym mieć możliwość sprawdzenia wyniku pobierania treści ze strony za pomocą adresu URL i web scrappera. Chciałbym wprowadzić adres URL do formularza, a także wybrać odpowiednie selektory dla interesujących mnie elementów na stronie. Po kliknięciu przycisku "Sprawdź scrappera" oczekuję, że web scraper pobierze zawartość strony na podstawie podanego URL i zwróci wartości dla wybranych selektorów. Chciałbym zobaczyć otrzymane wyniki na stronie, aby ocenić poprawność działania scrappera i upewnić się, że pobrane treści odpowiadają moim oczekiwaniom.
- [x] Jako użytkownik chciałbym w web scrapperze wydobyć wartości ze strony na podstawie dostarczonego przeze mnie kodu JSON. Chciałbym mieć możliwość określenia strony, z której chcę pobrać dane, oraz wskazania selektorów, które mają zostać zastosowane do wydobycia konkretnych wartości. Po przetworzeniu strony, oczekiwałbym otrzymać rezultat zawierający wybrane wartości wraz z informacjami o selektorach.
- [ x ] Dostosowanie endpointu scrapującego do przyjmowania i przetwarzania nowych danych
- [ x ] Jako użytkownik, chcę być informowany, gdy żądanie do endpointa nie jest obsługiwane, aby uniknąć nieoczekiwanego zachowania aplikacji.
  - Zaakceptuję wiadomość o błędzie o kodzie 405, jeśli wyślę żądanie inną metodą niż POST.
- [ x ] Jako użytkownik, chcę otrzymywać poprawne komunikaty błędów, gdy wystąpią problemy z serwerem lub zapytaniem, aby łatwiej zidentyfikować przyczynę problemu.
  - Zaakceptuję wiadomość o błędzie o kodzie 500 i informację "Błąd serwera", jeśli wystąpił problem z serwerem.
  - Zaakceptuję wiadomość o błędzie o kodzie 400 i odpowiednie informacje, jeśli żądanie było nieprawidłowe.
`git checkout -b feature/handling-unsupported-request-errors`
- [ ] Jako użytkownik, chcę, aby żądanie było wykonywane w ograniczonym czasie, aby uniknąć długiego oczekiwania na odpowiedź.
  - Zaakceptuję ustalenie limitu czasu na wykonanie żądania i otrzymam odpowiedni komunikat błędu, jeśli limit zostanie przekroczony.
- [ ] Jako użytkownik, chcę, aby pobieranie danych było wydajne, szczególnie gdy mam wiele selektorów.
  - Zaakceptuję równoczesne pobieranie danych dla różnych selektorów, co skróci czas wykonania żądania.
- [ ] Jako użytkownik, chcę, aby wyniki scrapowania były dostępne szybko, zwłaszcza gdy zapytania są często wykonywane dla tych samych stron i selektorów.
  - Zaakceptuję zastosowanie pamięci podręcznej, która przechowa wyniki scrapowania na określony czas, aby przyspieszyć dostęp do danych.
- [ ] Jako administrator, chcę mieć dostęp do logów, aby monitorować działanie endpointa i diagnozować ewentualne problemy.
  - Zaakceptuję zapisywanie informacji o żądaniach, odpowiedziach i błędach, które mogą wystąpić podczas scrapowania.


- dodanie name do selectorow, aby mozna bylo odczytac co sie scrapowalo
- dodanie odpowiednika, nazwy producenta etc
- nazwa grupy powinna pochodzic z JSONa
- dodanie apidoc do jsdocs

endpoint scrapujacy uzywajacy protokolu:

{
  "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
  "name": "Header",
  "createdDate": "2023-07-14T11:15:00Z",
  "lastModifiedDate": "2023-07-14T11:15:00Z",
  "isChecked": false,
  "author": "Bard",
  "scraps": [
    {
      "url": "https://www.example.com",
      "selectors": [
        {
          "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
          "name": "Header",
          "selector": "h1",
          "isChecked": true
        },
        {
          "uuid": "e62de0ab-79ae-4c80-ac2a-b6a9986090f5",
          "name": "Paragraph",
          "selector": "p",
          "isChecked": false
        },
        {
          "uuid": "3a1e98b8-173c-4a5c-bbc1-125812212e36",
          "name": "name",
          "selector": ".product-name",
          "isChecked": true
        },
        {
          "uuid": "e8b9987f-bfbb-4c0c-bc35-7d95a0e10543",
          "name": "dealer",
          "selector": ".dealer-name",
          "isChecked": true
        },
        {
          "uuid": "f8c43215-b249-4d8e-b9b1-12f6a88335a5",
          "name": "manufacturer",
          "selector": ".manufacturer-name",
          "isChecked": true
        },
        {
          "uuid": "90e714bb-1a17-492f-bdf1-8c5d70db1620",
          "name": "month",
          "selector": ".month",
          "isChecked": true
        },
        {
          "uuid": "dfc58a3a-79d3-4ab5-89d0-0e68a26ac6a1",
          "name": "year",
          "selector": ".year",
          "isChecked": true
        },
        {
          "uuid": "e9f5822a-3e62-42db-bb20-6ab1c53d875c",
          "name": "model",
          "selector": ".model",
          "isChecked": true
        },
        {
          "uuid": "172be69a-1609-454f-b21c-739d4ae2b4d4",
          "name": "substitute",
          "selector": ".substitute",
          "isChecked": true
        },
        {
          "uuid": "5e518e6e-518b-4e17-aa4a-c8f57fd61b6a",
          "name": "cataloguePriceNett",
          "selector": ".catalogue-price-nett",
          "isChecked": true
        },
        {
          "uuid": "90f9c1b2-7084-4d64-b5d7-66ed2327e5e3",
          "name": "shopPriceNett",
          "selector": ".shop-price-nett",
          "isChecked": true
        },
        {
          "uuid": "d14ff67f-557d-42f1-8a14-167915f1fbad",
          "name": "productHeight",
          "selector": ".product-height",
          "isChecked": true
        },
        {
          "uuid": "e47fabb0-6aae-4f7a-8fd3-58b3b2b6418f",
          "name": "productWidth",
          "selector": ".product-width",
          "isChecked": true
        },
        {
          "uuid": "c58d8cbf-b654-41ce-a536-9fc82599fc5d",
          "name": "productDepth",
          "selector": ".product-depth",
          "isChecked": true
        },
        {
          "uuid": "758ce536-829f-4b55-a1f5-0f0e349c5371",
          "name": "productFeatures",
          "selector": ".product-features",
          "isChecked": true
        },
        {
          "uuid": "9fd64115-8d71-4c0b-b7c2-672e6bda71e9",
          "name": "productCardLink",
          "selector": ".product-card-link",
          "isChecked": true
        },
        {
          "uuid": "d799d5b4-3ef5-4986-bd67-6b6768c8e81d",
          "name": "leadTime",
          "selector": ".lead-time",
          "isChecked": true
        },
        {
          "uuid": "32a6a0f9-d3b6-4a11-8659-33b09b0f97a9",
          "name": "productWarranty",
          "selector": ".product-warranty",
          "isChecked": true
        },
        {
          "uuid": "1d7e9af9-16b6-4d33-bc54-1798b0a32e20",
          "name": "comment",
          "selector": ".comment",
          "isChecked": true
        }
      ]
    }
  ]
}
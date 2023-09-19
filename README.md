TODOs:
- [x] Jako użytkownik chciałbym mieć możliwość sprawdzenia wyniku pobierania treści ze strony za pomocą adresu URL i web scrappera. Chciałbym wprowadzić adres URL do formularza, a także wybrać odpowiednie selektory dla interesujących mnie elementów na stronie. Po kliknięciu przycisku "Sprawdź scrappera" oczekuję, że web scraper pobierze zawartość strony na podstawie podanego URL i zwróci wartości dla wybranych selektorów. Chciałbym zobaczyć otrzymane wyniki na stronie, aby ocenić poprawność działania scrappera i upewnić się, że pobrane treści odpowiadają moim oczekiwaniom.
- [x] Jako użytkownik chciałbym w web scrapperze wydobyć wartości ze strony na podstawie dostarczonego przeze mnie kodu JSON. Chciałbym mieć możliwość określenia strony, z której chcę pobrać dane, oraz wskazania selektorów, które mają zostać zastosowane do wydobycia konkretnych wartości. Po przetworzeniu strony, oczekiwałbym otrzymać rezultat zawierający wybrane wartości wraz z informacjami o selektorach.
- [x] Dostosowanie endpointu scrapującego do przyjmowania i przetwarzania nowych danych
- [x] Jako użytkownik, chcę być informowany, gdy żądanie do endpointa nie jest obsługiwane, aby uniknąć nieoczekiwanego zachowania aplikacji.
  - Zaakceptuję wiadomość o błędzie o kodzie 405, jeśli wyślę żądanie inną metodą niż POST.
- [x] Jako użytkownik, chcę otrzymywać poprawne komunikaty błędów, gdy wystąpią problemy z serwerem lub zapytaniem, aby łatwiej zidentyfikować przyczynę problemu.
  - Zaakceptuję wiadomość o błędzie o kodzie 500 i informację "Błąd serwera", jeśli wystąpił problem z serwerem.
  - Zaakceptuję wiadomość o błędzie o kodzie 400 i odpowiednie informacje, jeśli żądanie było nieprawidłowe.
- [ ] Jako użytkownik, chcę, aby żądanie było wykonywane w ograniczonym czasie, aby uniknąć długiego oczekiwania na odpowiedź.
  - Zaakceptuję ustalenie limitu czasu na wykonanie żądania i otrzymam odpowiedni komunikat błędu, jeśli limit zostanie przekroczony.
- [x] Jako użytkownik, chcę, aby pobieranie danych było wydajne, szczególnie gdy mam wiele selektorów.
  - Zaakceptuję równoczesne pobieranie danych dla różnych selektorów, co skróci czas wykonania żądania.
- [x] Jako użytkownik, chcę, aby wyniki scrapowania były dostępne szybko, zwłaszcza gdy zapytania są często wykonywane dla tych samych stron i selektorów.
  - [ ] zastosowanie pamięci podręcznej, która przechowa wyniki scrapowania na określony czas, aby przyspieszyć dostęp do danych.
- [ ] Jako administrator, chcę mieć dostęp do logów, aby monitorować działanie endpointa i diagnozować ewentualne problemy.
  - Zaakceptuję zapisywanie informacji o żądaniach, odpowiedziach i błędach, które mogą wystąpić podczas scrapowania.
- [ ] Jako użytkownik, chcę mieć możliwość pobrania zapisanych danych w formacie .csv, aby móc łatwo i wygodnie udostępniać i analizować te dane w różnych programach.
- [ ] Jako użytkownik, chcę mieć przycisk "Pobierz jako CSV", który pozwoli mi na pobranie danych w formacie .csv.
- [ ] Jako użytkownik, po kliknięciu przycisku "Pobierz jako CSV", rozpocznie się pobieranie pliku .csv z danymi.
- [ ] Jako użytkownik, pobrany plik .csv powinien mieć odpowiednie nagłówki kolumn i separator pola ustawiony na przecinek.
- [ ] Jako użytkownik, pobrany plik .csv powinien zawierać wszystkie zapisane dane w odpowiedniej strukturze.
- [ ] Dodać dzień do schema DB
- [ ] Ulepszyć odpowiedzi serwera, tak aby posiadały optymalny UX i byly po angielsku
- [ ] Zastosowac fetchData tam gdzie dotad bylo pozyskiwnie danych z pomocą ids z BD
- [ ] Dodać cene brutto jako parametr
- [x] Napisac endpoint do checkScrap


- [x] dodanie name do selectorow, aby mozna bylo odczytac co sie scrapowalo
- dodanie odpowiednika, nazwy producenta etc
- nazwa grupy powinna pochodzic z JSONa
- dodanie apidoc do jsdocs
- [ ] testowanie dodawanie nowych scrapow

endpoint scrapujacy uzywajacy protokolu:

{
  "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
  "name": "Site XYZ",
  "createdDate": "2023-07-14T11:15:00Z",
  "lastModifiedDate": "2023-07-14T11:15:00Z",
  "isChecked": false,
  "author": "Bard",
  "scraps": [
    {
      "url": "https://e-promag.pl/katalog/Szafka-BHP-pracownicza-SUPE300-02-7035,2831.html",
      "selectors": [
        {
          "uuid": "3a1e98b8-173c-4a5c-bbc1-125812212e36",
          "name": "name",
          "selector": "",
          "value": "Promag",
          "isChecked": true
        },
        {
          "uuid": "e8b9987f-bfbb-4c0c-bc35-7d95a0e10543",
          "name": "dealer",
          "selector": "",
          "value": "Promag S.A.",
          "isChecked": true
        },
        {
          "uuid": "f8c43215-b249-4d8e-b9b1-12f6a88335a5",
          "name": "manufacturer",
          "selector": "",
          "value": "Promag S.A.",
          "isChecked": true
        },
        {
          "uuid": "90e714bb-1a17-492f-bdf1-8c5d70db1620",
          "name": "month",
          "selector": "month",
          "value": "7",
          "isChecked": true
        },
        {
          "uuid": "dfc58a3a-79d3-4ab5-89d0-0e68a26ac6a1",
          "name": "year",
          "selector": "year",
          "value": "2023",
          "isChecked": true
        },
        {
          "uuid": "e9f5822a-3e62-42db-bb20-6ab1c53d875c",
          "name": "model",
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.description1.rwd-320-hide > div.col-sm-9 > div",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "172be69a-1609-454f-b21c-739d4ae2b4d4",
          "name": "substitute",
          "selector": "",
          "value": "SUM 320W",
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
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.price > div.netto.nettoPrice > span",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "d14ff67f-557d-42f1-8a14-167915f1fbad",
          "name": "productHeight",
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.description3 > div.col-sm-8 > div.row.properties > div > div > div:nth-child(1) > div:nth-child(4) > div.col-xs-5.value",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "e47fabb0-6aae-4f7a-8fd3-58b3b2b6418f",
          "name": "productWidth",
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.description3 > div.col-sm-8 > div.row.properties > div > div > div:nth-child(1) > div:nth-child(1) > div.col-xs-5.value",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "c58d8cbf-b654-41ce-a536-9fc82599fc5d",
          "name": "productDepth",
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.description3 > div.col-sm-8 > div.row.properties > div > div > div:nth-child(2) > div:nth-child(1) > div.col-xs-5.value",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "758ce536-829f-4b55-a1f5-0f0e349c5371",
          "name": "productFeatures",
          "selector": "#opis",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "9fd64115-8d71-4c0b-b7c2-672e6bda71e9",
          "name": "productCardLink",
          "selector": "product_card_link",
          "value": "https://e-promag.pl/katalog/Szafka-BHP-pracownicza-SUPE300-02-7035,2831.html",
          "isChecked": true
        },
        {
          "uuid": "d799d5b4-3ef5-4986-bd67-6b6768c8e81d",
          "name": "leadTime",
          "selector": "#main > div.container.wrapper > div:nth-child(6) > div.container-main > div.row.main-content-2 > div.col-sm-8.product > div.row.description3 > div.col-sm-4 > div.row.availability > span",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "32a6a0f9-d3b6-4a11-8659-33b09b0f97a9",
          "name": "productWarranty",
          "selector": "#opis > div.col-sm-12 > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div.col-xs-5.value",
          "value": "",
          "isChecked": true
        },
        {
          "uuid": "1d7e9af9-16b6-4d33-bc54-1798b0a32e20",
          "name": "comment",
          "selector": "#opis > div.col-sm-12 > div > div > div > div:nth-child(2) > div > div:nth-child(4) > div.col-xs-5.value",
          "value": "",
          "isChecked": true
        }
      ]
    }
  ]
}

TODOs:

- [x] Jako użytkownik chciałbym w web scrapperze wydobyć wartości ze strony na podstawie dostarczonego przeze mnie kodu JSON. Chciałbym mieć możliwość określenia strony, z której chcę pobrać dane, oraz wskazania selektorów, które mają zostać zastosowane do wydobycia konkretnych wartości. Po przetworzeniu strony, oczekiwałbym otrzymać rezultat zawierający wybrane wartości wraz z informacjami o selektorach.

- dodanie name do selectorow, aby mozna bylo odczytac co sie scrapowalo
- dodanie odpowiednika, nazwy producenta etc
- nazwa grupy powinna pochodzic z JSONa
- dodanie apidoc do jsdocs

endpoint scrapujacy uzywajacy protokolu:

{
  "groups": [
    {
      "name": "group1",
      "uuid": "e5e171b2-60ae-40d6-94a7-de5b6ad8ccaf",
      "isChecked": true,
      "scraps": [
        {
          "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
          "name": "name1",
          "url": "https://www.google.co.uk/",
          "isChecked": true,
          "selectors": [
            {
              "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
              "selector": "title",
              "value": "Google",
              "isChecked": true
            },
            {
              "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd189",
              "selector": "body",
              "value": "Welcome to Google",
              "isChecked": true
            }
          ]
        },
        {
          "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd187",
          "name": "name1",
          "url": "https://www.google.co.uk/",
          "isChecked": true,
          "selectors": [
            {
              "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd186",
              "selector": "title",
              "value": "Google",
              "isChecked": true
            },
            {
              "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd185",
              "selector": "body",
              "value": "Welcome to Google",
              "isChecked": true
            }
          ]
        }
      ]
    }
  ]
}
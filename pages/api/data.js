import { v4 as uuidv4 } from 'uuid';

export const data = [
  {
    name: 'group1',
    uuid: uuidv4(),
    scraps: [
      {
        uuid: uuidv4(),
        name: 'name1',
        url: 'https://www.google.co.uk/',
        selector: 'title',
        value: 'value1',
        isChecked: true,
      },
      {
        uuid: uuidv4(),
        name: 'name2',
        url: 'https://www.onet.pl/',
        selector: 'title',
        value: 'value2',
        isChecked: false,
      },
    ],
  },
  {
    name: 'group2',
    uuid: uuidv4(),
    scraps: [
      {
        uuid: uuidv4(),
        name: 'name1',
        url: 'https://www.google.co.uk/',
        selector: 'title',
        value: 'value1',
        isChecked: true,
      },
      {
        uuid: uuidv4(),
        name: 'name2',
        url: 'https://www.onet.pl/',
        selector: 'title',
        value: 'value2',
        isChecked: false,
      },
    ],
  },
];

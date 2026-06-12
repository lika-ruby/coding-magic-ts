export type ScientistData = {
  id: number;
  name: string;
  years: string;
};

export const scientistData: ScientistData[] = [
  {
    id: 1,
    name: "Albert Einstein",
    years: "1879–1955",
  },
  {
    id: 2,
    name: "Isaac Newton",
    years: "1643–1727",
  },
  {
    id: 3,
    name: "Galileo Galilei",
    years: "1564–1642",
  },
  {
    id: 4,
    name: "Marie Curie",
    years: "1867–1934",
  },
  {
    id: 5,
    name: "Johannes Kepler",
    years: "1571–1630",
  },
  {
    id: 6,
    name: "Nicolaus Copernicus",
    years: "1473–1543",
  },
  {
    id: 7,
    name: "Max Planck",
    years: "1858–1947",
  },
  {
    id: 8,
    name: "Katherine Blodgett",
    years: "1898–1979",
  },
  {
    id: 9,
    name: "Ada Lovelace",
    years: "1815–1852",
  },
  {
    id: 10,
    name: "Sarah E. Goode",
    years: "1855–1905",
  },
  {
    id: 11,
    name: "Lise Meitner",
    years: "1878–1968",
  },
  {
    id: 12,
    name: "Hanna Hammarström",
    years: "1829–1909",
  },
];

type BtnData = {
  id: number;
  text: string;
};

export const btnData: BtnData[] = [
  {
    id: 1,
    text: "Які вчені народилися в 19 ст.",
  },
  {
    id: 2,
    text: "Знайти рік народження Albert Einshtein",
  },
  {
    id: 3,
    text: "Відсортувати вчених за алфавітом",
  },
  {
    id: 4,
    text: "Знайти вчених, прізвища яких починаються на на літеру “С” ",
  },
  {
    id: 5,
    text: "Відсортувати вчених за кількістю прожитих років",
  },
  {
    id: 6,
    text: "Видалити всіх вчених, ім’я яких починається на “А”",
  },
  {
    id: 7,
    text: "Знайти вченого, який народився найпізніше",
  },
  {
    id: 8,
    text: "Знайти вченого, який прожив найдовше і вченого, який прожив найменше",
  },
  {
    id: 9,
    text: "Знайти вчених, в яких співпадають перші літери імені і прізвища",
  },
];

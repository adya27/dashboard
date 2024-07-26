// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

const exchange = [
  {
    code: "LSE",
    stockExchange: "London Stock Exchange",
    topStocks: [
      {
        code: "CRDA",
        stockName: "CRODA INTERNATIONAL PLC",
        price: 4807.0,
      },
      {
        code: "GSK",
        stockName: "GSK PLC",
        price: 1574.8,
      },
      {
        code: "ANTO",
        stockName: "ANTOFAGASTA PLC",
        price: 1746.0,
      },
      {
        code: "FLTR",
        stockName: "FLUTTER ENTERTAINMENT PLC",
        price: 16340.0,
      },
      {
        code: "BDEV",
        stockName: "BARRATT DEVELOPMENTS PLC",
        price: 542.6,
      },
    ],
  },
  {
    code: "NYSE",
    stockExchange: "New York Stock Exchange",
    topStocks: [
      {
        code: "AHT",
        stockName: "Ashford Hospitality Trust",
        price: 1.72,
      },
      {
        code: "KUKE",
        stockName: "Kuke Music Holding Ltd",
        price: 1.2,
      },
      {
        code: "ASH",
        stockName: "Ashland Inc.",
        price: 93.42,
      },
      {
        code: "NMR",
        stockName: "Nomura Holdings Inc.",
        price: 5.84,
      },
      {
        code: "LC",
        stockName: "LendingClub Corp",
        price: 9.71,
      },
    ],
  },
  {
    code: "NASDAQ",
    stockExchange: "Nasdaq",
    topStocks: [
      {
        code: "AMD",
        stockName: "Advanced Micro Devices, Inc.",
        price: 164.21,
      },
      {
        code: "TSLA",
        stockName: "Tesla, Inc.",
        price: 190.35,
      },
      {
        code: "SOFI",
        stockName: "SoFi Technologies, Inc.",
        price: 8.24,
      },
      {
        code: "PARA",
        stockName: "Paramount Global",
        price: 14.92,
      },
      {
        code: "GOOGL",
        stockName: "Alphabet Inc.",
        price: 141.91,
      },
    ],
  },
];

export { customers, exchange, invoices, revenue, users };

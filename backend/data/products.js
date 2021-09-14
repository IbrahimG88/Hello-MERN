const products = [
  {
    _id: "1",
    name: "Vidas B-HCG",
    category: "Endocrinology",
    description: "Pregnancy test used with VIDAS",
    price: 89.99,
    daysTillDepletion: 200,
    unit: "Test",
    testsPerUnit: 1,
    consumptionPerDay: 10,
    recentOrderAmount: 30,
    amountInStockTotal: 400,
    reorderAmount: 60,
    recentOrderDate: "1 / 12 / 2021",
    reorderDate: "22 / 8 / 2022",
  },
  {
    _id: "2",
    name: "TOSO T3",
    category: "Endocrinology",
    description: "Thyroid test used with TOSO",
    price: 300,
    daysTillDepletion: 600,
    unit: "Test",
    testsPerUnit: 1,
    consumptionPerDay: 5,
    recentOrderAmount: 30,
    amountInStockTotal: 800,
    reorderAmount: 110,
    recentOrderDate: "4 / 11 / 2021",
    reorderDate: "26 / 9 / 2022",
  },
  {
    _id: "3",
    name: "Urine Strips",
    category: "Microbiology",
    description: "Multi parameter test for urine 13 param",
    price: 30,
    daysTillDepletion: 300,
    unit: "Pack",
    testsPerUnit: 100,
    consumptionPerDay: 30,
    recentOrderAmount: 30,
    amountInStockTotal: 20,
    reorderAmount: 10,
    recentOrderDate: "6 / 6 / 2021",
    reorderDate: "22 / 7 / 2022",
  },
];

export default products;

import Order from "../models/Order.model";

const seedProducts = [
  {
    carId: 1,
    customerId: 1,
    amount: 1,
    sum: 2000000,
    date: "01.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    carId: 2,
    customerId: 2,
    amount: 2,
    sum: 3500000,
    date: "02.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    carId: 3,
    customerId: 3,
    amount: 1,
    sum: 2000000,
    date: "02.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    carId: 3,
    customerId: 2,
    amount: 1,
    sum: 2000000,
    date: "02.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    carId: 1,
    customerId: 2,
    amount: 2,
    sum: 2000000,
    date: "02.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    carId: 2,
    customerId: 1,
    amount: 1,
    sum: 3000000,
    date: "03.07.2022",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
] as Order[];

export const up = async ({ context: sequelize }) => {
  if (!seedProducts.length) return;
  await sequelize.getQueryInterface().bulkInsert(Order.tableName, seedProducts);
};

export const down = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().bulkDelete(Order.tableName, {
    id: seedProducts.map((u) => u.id),
  });
};

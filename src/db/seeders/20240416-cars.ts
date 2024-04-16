
import Car from "../models/Car.model";

const seedProducts =  [
    {
      name: "BMW X5",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "BMW X6",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "BMW X7",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ] as Car[]

export const up = async ({ context: sequelize }) => {
  if (!seedProducts.length) return;
  await sequelize
    .getQueryInterface()
    .bulkInsert(Car.tableName, seedProducts);
};

export const down = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().bulkDelete(Car.tableName, {
    id: seedProducts.map((u) => u.id),
  });
};

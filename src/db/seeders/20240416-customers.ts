
import Customer from "../models/Customer.model";

const seedProducts =  [
    {
      name: "Иванов Сергей",
      phone: "+79107891122",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Коробкин Олег",
      phone: "+79107891155",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Олейкин Роман",
      phone: "+79107891166",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ] as Customer[]

export const up = async ({ context: sequelize }) => {
  if (!seedProducts.length) return;
  await sequelize
    .getQueryInterface()
    .bulkInsert(Customer.tableName, seedProducts);
};

export const down = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().bulkDelete(Customer.tableName, {
    id: seedProducts.map((u) => u.id),
  });
};

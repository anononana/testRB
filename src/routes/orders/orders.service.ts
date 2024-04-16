import Car from "@/db/models/Car.model";
import Customer from "@/db/models/Customer.model";
import Order from "@/db/models/Order.model";
import moment from "moment";
import { FindOptions, Op, Transaction } from "sequelize";
import { Sequelize } from "sequelize-typescript";

class OrderService {
  async getList() {
    const queryObj: FindOptions<Order> = {
      attributes: [
        "amount",
        "date",
        "sum",
        [Sequelize.col("car.name"), "carName"],
        [Sequelize.col("customer.name"), "customerName"],
        [Sequelize.col("customer.phone"), "customerPhone"],
      ],
      include: [
        { model: Customer, attributes: [] },
        { model: Car, attributes: [] },
      ],
      where: {},
      order: [
        ["date", "desc"],
        ["customerName", "asc"],
        ["sum", "asc"],
      ],
    };

    const foundLicenses = await Order.findAndCountAll({
      ...queryObj,
    });

    return {
      data: foundLicenses.rows,
      total: foundLicenses.count,
    };
  }
  async getRevenue(startDate: string, endDate: string) {

    return Order.sum("sum", {
      where: { date: { [Op.between]: [moment(startDate).startOf('d').toDate(), moment(endDate).endOf('d').toDate()] } },
    });
  }
}

export const orderFactory = () => new OrderService();

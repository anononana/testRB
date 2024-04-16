
import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    ForeignKey,
    HasOne,
    BelongsTo,
    Unique,
    Default,
  } from "sequelize-typescript";
import Car from "./Car.model";
import Customer from "./Customer.model";
  
  export enum EDocStatus {
      NEW = "NEW",
      PENDING = "PENDING",
      ERROR = "ERROR",
      DONE = "DONE"
  }
  @Table({
    timestamps: true,
  })
  class Order extends Model<Order> {    

    @AllowNull(false)
    @ForeignKey(() => Car)
    @Column(DataType.INTEGER)
    carId: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    amount: number

    @AllowNull(false)
    @Column(DataType.DECIMAL(10,2))
    sum: number

    @AllowNull(false)
    @ForeignKey(() => Customer)
    @Column(DataType.INTEGER)
    customerId: number

    @AllowNull(false)
    @Column(DataType.DATE)
    date: string

    @BelongsTo(() => Car, 'carId')
    car: Car

    @BelongsTo(() => Customer, 'customerId')
    customer: Customer

  }
  
  export default Order;
  
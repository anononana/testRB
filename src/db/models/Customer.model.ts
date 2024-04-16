
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
    HasMany,
  } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";
import Order from "./Order.model";
  
  export enum EDocStatus {
      NEW = "NEW",
      PENDING = "PENDING",
      ERROR = "ERROR",
      DONE = "DONE"
  }
  @Table({
    timestamps: true,
  })
  class Customer extends Model<Customer> {    

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.STRING)
    phone: string

    @HasMany(() => Order)
    orders: Order[]

  }
  
  export default Customer;
  
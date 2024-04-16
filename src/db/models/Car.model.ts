
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

  @Table({
    timestamps: true,
  })
  class Car extends Model<Car> {    

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @HasMany(() => Order)
    orders: Order[]

  }
  
  export default Car;
  
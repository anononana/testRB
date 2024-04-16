import { Context } from "koa";
import { orderFactory } from "./orders.service";
export const list = async (ctx: Context) => {
  const systemEvents = await orderFactory().getList();

  ctx.body = systemEvents;
};

export const getRevenue = async (ctx: Context) => {
  if (!ctx.query.startDate || !ctx.query.endDate) {
    ctx.status = 400;
    return (ctx.body = {
      message: "Отсутствуют параметры начальной и конечной даты.",
    });
  }
  const revenue = await orderFactory().getRevenue(
    ctx.query.startDate as string,
    ctx.query.endDate as string
  );

  ctx.body = revenue || 0;
};


import { Context, DefaultState } from "koa";
import Router from "koa-router";
import { getRevenue, list } from "./orders.controller";


const router = new Router<DefaultState, Context>();

router.prefix("/orders");

router.get("/", list);

router.get('/revenue', getRevenue)


export default router;

import { Context, DefaultState } from "koa";
import Router from "koa-router";
import orderRoutes from "@/routes/orders"

const router = new Router<DefaultState, Context>();

router.get("/", (ctx: any) => {
  ctx.body = "Hello";
});

router.use(orderRoutes.routes())



export default router;

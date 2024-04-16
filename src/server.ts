import "reflect-metadata";
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import config from '@/config';
import routes from '@/routes';
import path from "path";


const app = new Koa();

app.use(
  bodyParser({
    text: false,
    json: true,
    patchNode: true,
    patchKoa: true,
    multipart: true,
  })
);

app.use(cors());

if (config.env !== 'development') {
  app.proxy = true;
}

app.use(routes.routes())

export default app;

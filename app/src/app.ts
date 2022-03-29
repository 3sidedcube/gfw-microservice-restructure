import Koa from "koa";
import { RegisterRoutes } from "./routes/routes";
import Router from "@koa/router";

const app = new Koa();

const router = new Router();

RegisterRoutes(router);

app.use(router.routes());

app.listen(3000);

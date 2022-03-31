import Koa from "koa";
import newKoaRouter from "routes/newKoaRouter";
import oldKoaRouter from "routes/oldKoaRouter";

export default (app: Koa) => {
  app.use(newKoaRouter.routes());
  app.use(oldKoaRouter.routes());
};

import Router from "@koa/router";

const router = new Router();

router.get("/newKoaRouter", ctx => {
  ctx.body = "Hello from newKoaRouter";
});

export default router;

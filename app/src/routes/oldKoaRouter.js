// eslint-disable-next-line @typescript-eslint/no-var-requires
const Router = require("koa-router");

const router = new Router();

router.get("/oldKoaGenerator", function* oldKoaGenerator() {
  yield Promise.resolve();
  this.body = "Hello from oldKoaGenerator";
});

module.exports = router;

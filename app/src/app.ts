import Koa from "koa";
import routes from "routes";
import convert from "koa-convert";

const app = new Koa();
// Legacy Middleware convertor
const _use = app.use;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use = x => _use.call(app, convert(x));

routes(app);

app.listen(3000);

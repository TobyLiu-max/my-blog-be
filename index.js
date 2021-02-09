const Koa = require("koa");
const mongoose = require("mongoose");
const koaBody = require("koa-body");
const config = require("./config/default");
const router = require("./routes/users");

const app = new Koa();

mongoose.connect(config.mongodb, { useNewUrlParser: true }, () =>
  console.log("MongoDB 连接成功了！")
);
mongoose.connection.on("error", console.error);

app.use(koaBody());
app.use(router.routes());

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

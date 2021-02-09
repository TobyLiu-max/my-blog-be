const Router = require("koa-router");
const router = new Router({ prefix: "/blog/api" });

const { signUp } = require("../controllers/users");

router.post("/signup", signUp);

module.exports = router;

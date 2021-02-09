const User = require("../modules/users");

class UsersCtl {
  async signUp(ctx) {
    const { name } = ctx.request.body;
    const repeatedUser = await User.findOne({ name });
    if (repeatedUser) {
      ctx.throw(409, "用户已经占用");
    }
    const data = await new User(ctx.request.body).save();
    ctx.body = {
      code: 200,
      message: "注册成功",
      data: data,
    };
  }
}

module.exports = new UsersCtl();

'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async signup() {
    const { ctx } = this;
    const body = this.ctx.request.body;
    console.log(body);
    ctx.validate({
      username: { type: 'string' },
      email: { type: 'email' },
      password: { type: 'string' },
    }, body);

    // const userService = this.service.user;

    // // 校验用户是否存在
    // if (await userService.findByUsername(body.username)) {
    //   this.ctx.throw(422, '用户已存在');
    // }

    // if (await userService.findByEmail(body.email)) {
    //   this.ctx.throw(422, '邮箱已存在');
    // }
    // // 保存用户
    // const user = await userService.createUser(body);

    // // 生成token
    // const token = await userService.createToken({
    //   userId: user._id,
    // });
    // 发送响应
    ctx.body = {
      success: true,
      // user: {
      //   email: user.email,
      //   token,
      //   username: user.username,
      //   channelDescription: user.channelDescription,
      //   avatar: user.avatar,
      // },
    };
  }
}

module.exports = HomeController;

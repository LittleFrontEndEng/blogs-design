const Service = require('egg').Service;

class UserService extends Service {
  get User() {
    return this.ctx.model.User;
  }

  findByUsername(username) {
    return this.User.findOne({
      username,
    });
  }

  findByEmail(email) {
    return this.User.findOne({
      email,
    }).select('+password');
  }

  createUser(data) {
    data.password = this.ctx.helper.md5(data.password);
    const user = this.User.create(data);
    return user;
  }
}

module.exports = UserService;

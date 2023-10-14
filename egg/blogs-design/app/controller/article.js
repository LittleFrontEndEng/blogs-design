const { Controller } = require('egg');

class ArticleController extends Controller {
  async createFile() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.validate({
      title: { type: 'string' },
      cover: { type: 'string' },
      content: { type: 'string' },
    }, body);
  }
}

module.exports = ArticleController;

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
    const articleService = this.service.article;
    body.author = ctx.user._id;
    const article = await articleService.createArticle(body);

    ctx.body = {
      success: true,
      article: {
        title: article.title,
      },
    };
  }
}

module.exports = ArticleController;

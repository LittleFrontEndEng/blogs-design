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

  async getArticle() {
    const { ctx } = this;
    const body = ctx.request.body;
    console.log(body);
    const { Article } = ctx.model;
    ctx.validate({
      current: { type: 'number' },
      pageSize: { type: 'number' },
    }, body);

    const current = Number.parseInt(body.current);
    const pageSize = Number.parseInt(body.pageSize);

    const getArticle = Article.find().populate('author').sort({
      createdAt: -1,
    })
      .skip((current - 1) * pageSize)
      .limit(pageSize);
    const getLength = Article.countDocuments();

    const [ article, count ] = await Promise.all([ getArticle, getLength ]);
    const resultArticle = article.map(item => {
      return {
        id: item._id,
        title: item.title,
        cover: item.cover,
        viewsCount: item.viewsCount,
        createTime: item.createdAt,
        updateTime: item.updatedAt,
        author: {
          username: item.author.username,
          avatar: item.author.avatar,
        },
      };
    });
    ctx.body = {
      success: true,
      count,
      article: resultArticle,
    };
  }

  async deleteArticle() {
    const { ctx } = this;
    const { Article } = ctx.model;
    const { articleId } = ctx.params;

    const article = await Article.findById(articleId);

    if (!article) {
      ctx.throw(404, 'Article not found');
    }

    await article.deleteOne();

    ctx.body = {
      success: true,
    };
  }

  async getArticleDetail() {
    const { ctx } = this;
    const { articleId } = ctx.params;
    const { Article } = ctx.model;

    const article = await Article.findById(articleId).populate('author');

    ctx.body = {
      success: true,
      article,
    };
  }
}

module.exports = ArticleController;

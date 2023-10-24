'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.prefix('/api/v1'); // 设置基础路径

  // 用户注册
  router.post('/user/signup', controller.user.signup);
  // 用户登录
  router.post('/user/login', controller.user.login);

  // 新建文章
  router.post('/article/creation', auth, controller.article.createFile);
  // 获取文章列表
  router.post('/article/list', app.middleware.auth({ required: false }), controller.article.getArticle);
  // 删除接口
  router.delete('/article/del/:articleId', auth, controller.article.deleteArticle);
  // 获取文章详情
  router.get('/article/detail/:articleId', app.middleware.auth({ required: false }), controller.article.getArticleDetail);
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.prefix('/api/v1'); // 设置基础路径

  // 用户注册
  router.post('/user/signup', controller.user.signup);
  // 用户登录
  router.post('/user/login', controller.user.login);


  // 新建文章
  router.post('/article/creation', controller.article.createFile);
};

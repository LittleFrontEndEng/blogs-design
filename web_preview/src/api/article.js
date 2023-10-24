import request from "../utils/request";

export const getArticlesList = (params) => {
  return request('/api/v1/article/list', {
    method: 'POST',
    data,
  });

}
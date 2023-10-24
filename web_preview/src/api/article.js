import request from "../utils/request";

export const getArticlesList = (data) => {
  return request('/api/v1/article/list', {
    method: 'POST',
    data,
  });
}

export const getArticleDetail = (params) => {
  return request(`/api/v1/article/detail/${params}`, {
    method: 'GET',
  });
}
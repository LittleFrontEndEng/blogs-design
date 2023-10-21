import request from '@/utils/request';
import { CreateArticleType } from '@/type/article'

export const createArticleApi = (data: CreateArticleType) => {
  return request('/api/v1/article/creation', {
    method: 'POST',
    data,
  });
};
import request from '@/utils/request';
import { LoginSignUp, LoginSignIn } from '@/type/login';

// 用户注册
export const signup = (data: LoginSignUp) => {
  request('/api/v1/user/signup', {
    method: 'POST',
    data,
  });
};

// 用户登录
export const signin = (data: LoginSignIn) => {
  request('/api/v1/user/login', {
    method: 'POST',
    data,
  });
};

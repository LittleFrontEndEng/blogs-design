import axios from "axios";
import { history } from "umi";
const request = axios.create({
  baseURL: 'http://127.0.0.1:7001'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log()
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  } else {
    // 跳转登录页
    history.push({
      pathname: '/login',
    })
  }

  // Bearer
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(response)
  return response.data || response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // console.log(error)
  if (error.response.status === 401) {
    history.push({
      pathname: '/login',
    })
  }
  return Promise.reject(error);
});

export default request;
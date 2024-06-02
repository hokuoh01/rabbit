
//1. 实例化 - baseURL + timeout
//2.拦截器 - 携带token 401拦截等

import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', 
  //此为基本地址， 可以是域名，也可以是IP地址 具体看业务 简单来说就是获取数据的地址，后端
  timeout: 5000 //设置超时时间  
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})


export default httpInstance
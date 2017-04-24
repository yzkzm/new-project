import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const API_ROOT = 'http://123.57.248.221:81'
Vue.use(VueAxios, axios)
// axios 配置
// Vue.axios.defaults.timeout = 5000
Vue.axios.defaults.baseURL = API_ROOT

// http request拦截器
Vue.axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// http response 拦截器
Vue.axios.interceptors.response.use(
  (response) => {
    // Do something with response is back
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios

/**
 * fetch请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * post请求
 * @param url
 * @param data 默认为空对象
 * @returns { Pormise }
 */

/* eslint no-undef: "error" */
export function sendPost (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
  })
}

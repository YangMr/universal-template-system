import request from '../utils/request'

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

/**
 * 获取用户信息接口
 * @returns
 */
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

export default {
  login,
  getUserInfo
}

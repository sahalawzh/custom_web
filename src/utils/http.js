import axios from 'axios'
import handleErrorStatus from '@/common/utils/handleErrorStatus'
// 开发环境跨域请求带cookie
if (process.env.NODE_ENV === 'development') {
  axios.defaults.withCredentials = true
} else {
  try {
    // const token = document.getElementsByName('csrf-token')[0].getAttribute('content') || ''
    // axios.defaults.headers.common['X-CSRF-Token'] = token
  } catch (e) {
    console.log(e)
  }
}
// 默认一分钟超时
axios.defaults.timeout = 60000
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// 处理api链接
axios.interceptors.request.use(function (config) {
  try {
    // const { url } = config
    // if (process.env.NODE_ENV === 'development') {
    //   config.url = `/api${url}&id=a450089706`
    // } else {
    //   if (url.indexOf('/index.php') > -1) {
    //     config.url = url
    //   } else {
    //     config.url = `/index.php/iapi${url}`
    //   }
    // }
  } catch (e) {
  }
  return config
})

// resolve error
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.resolve(error.response)
})
const checkStatus = function (response) {
  if (response) {
    // const { REJECTERRORCONFIG = {} } = response.config
    // if (response.status === 200 || response.status === 304) {
    //   if (response.data.status === 1000 || response.data.errmsg === 'ok') {
    //     return response.data
    //   } else {
    //     return {
    //       code: -404,
    //       url: response.config.url,
    //       REJECTERRORCONFIG,
    //       ...response.data
    //     }
    //   }
    // }
    // return {
    //   code: -404,
    //   status: response.status,
    //   msg: response.statusText,
    //   url: response.config.url,
    //   REJECTERRORCONFIG
    // }
  } else {
    return {
      code: -404
    }
  }
}
const checkCode = function (res) {
  // 错误处理
  if (res.code === -404) {
    return handleErrorStatus(res)
  } else {
    return res
  }
}
const formatUrl = function (url, data, contentType) {
  if (contentType === 'application/x-www-form-urlencoded') {
    data = formatUrlParams('?' + data)
  } else if (!data) {
    data = {}
  }
  let urlParams = formatUrlParams(url)
  let urlOpenid = formatUrlParams(window.location.href).openid
  urlParams.openid = data.openid || urlParams.openid || urlOpenid || OPEN_ID
  delete data.openid
  let newUrl = url.split('?')[0]
  let urlParamArr = []
  for (let key in urlParams) {
    urlParamArr.push(key + '=' + encodeURIComponent(urlParams[key]))
  }
  if (urlParamArr.length) {
    newUrl += '?' + urlParamArr.join('&')
  }
  if (contentType === 'application/x-www-form-urlencoded') {
    let dataArr = []
    for (let key in data) {
      dataArr.push(key + '=' + encodeURIComponent(data[key]))
    }
    data = dataArr.join('&')
  }
  return {
    url: newUrl,
    data: data
  }
}
export default {
  post (url, data, config) {
    if (process.env.NODE_ENV === 'development') {
      let d = formatUrl(url, data, config && config.headers && config.headers['Content-Type'])
      // url = d.url
      // d.id = formatUrlParams(d.url).inter_id
      // url += '&unionid=' + UNION_ID
      // data = d.data
    }
    let _config = Object.assign({}, { data: data, url: url, method: 'post' }, config)
    return axios(_config).then(checkStatus).then(checkCode)
  },
  get (url, data, config) {
    if (process.env.NODE_ENV === 'development') {
      let d = formatUrl(url, data, config && config.headers && config.headers['Content-Type'])
      url = d.url
      data = d.data
      if (data.unionid === undefined) {
        data.unionid = UNION_ID
      }
    }
    let _config = Object.assign({}, { params: data, method: 'get', url: url }, config)
    return axios(_config).then(checkStatus).then(checkCode)
  }
}

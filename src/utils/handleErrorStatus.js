import MessageBox from '@/components/common/messageBox/main.js'

export default function handleErrorStatus (res) {
  const {httpError, serveError, duration} = res.REJECTERRORCONFIG || {}
  const {status, msg, url} = res
  if (!httpError || !serveError) {
    let message
    if (!httpError && status < 1000 && status > 399) {
      message = msg
      if (res.status === 401) {
        window.location.reload()
        return
      }
      switch (status) {
        case 403:
          message = process.env.NODE_ENV === 'development' ? `当前用户无权限请求接口${url}` : '无权限进行相关操作，请反馈给网站提供者'
          break
        case 404:
          message = process.env.NODE_ENV === 'development' ? `接口${url}未找到` : '请确认链接是否正确'
          break
        case 500:
        case 504:
          message = process.env.NODE_ENV === 'development' ? `服务器发生内部错误` : '服务器异常，请稍后重试'
          break
      }
    }
    if (!serveError && status === -1) {
      message = `系统繁忙`
    }
    if (!serveError && status > 1000) {
      if (status === 110001) {
        window.location.reload()
        return
      } else {
        message = msg
      }
    }
    if (message) {
      // MessageBox({
      //   message: '测试',
      //   showConfirmButton: true,
      //   showCancelButton: true
      // }).then((res) => {
      //   if (res !== 'cancel') {
      //     this.commit(types.DELETE_CART_DATA, opts)
      //   }
      // }).catch(() => {
      // })
      MessageBox('温馨提示', message)
    }
  }
  return Promise.reject(res)
}

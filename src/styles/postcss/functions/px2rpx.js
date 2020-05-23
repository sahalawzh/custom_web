module.exports = function (px) {
  if (!px) {
    throw Error('px2rpx需要传px参数')
  }
  px = parseFloat(eval(px))
  return px + 'rpx'
}
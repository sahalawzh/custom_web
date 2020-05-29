import http from '@/utils/http'

const BASE_URL = '/api'

export const API = {
	// 获取首页材料列表（无分页）
  GET_METERIAL_INDEX_LIST: `${BASE_URL}/material/indexList`,
  // 获取打印材料列表（无分页）
  GET_METERIAL_BUY_LIST: `${BASE_URL}/material/buyList`,
  // 材料详情
  GET_METERIAL_INFO: `${BASE_URL}/material/info/materialId`,
  // 获取首页工艺列表（无分页）
  GET_TECHBOLOGY_LIST: `${BASE_URL}/technology/list`,
  // 工艺详情
  GET_TECHBOLOGY_INFO: `${BASE_URL}/technology/info/technologyId`,
  // 首页行业案例
  GET_CASE_LIST_COLUMN: `${BASE_URL}/case/listColumn`,
  // 所有案例
  GET_CASE_ALL_CASES: `${BASE_URL}/case/allCases`,
  // 根据类型获取案例
  GET_CASE_LIST_CASE: `${BASE_URL}/case/listCase`,
  // 根据id获取具体案例
  GET_CASE_DETAIL: `${BASE_URL}/case/detail`,
  // 推荐案例
	GET_CASE_RANDOM_CASE: `${BASE_URL}/case/randomCase`,
  // 新闻列表
	GET_NEWS_LIST: `${BASE_URL}/news/listNews`,
  // 新闻详情
	GET_NEWS_DETAIL: `${BASE_URL}/news/detail`,
  // 首页配置数据
	GET_CONFIG_DATA: `${BASE_URL}/config/selectConfigByAppType`,
  // 保密协定
	GET_CONFIDENTIALITY_AGREEMENT: `${BASE_URL}/page/confidentialityAgreement`,
  // 关于我们我们
	GET_ABOUT_US: `${BASE_URL}/page/aboutUs`
}

export const getAboutUs = function (data, config) {
	return http.get(API.GET_ABOUT_US, data, config)
}
export const getConfidentialityAgreement = function (data, config) {
	return http.get(API.GET_CONFIDENTIALITY_AGREEMENT, data, config)
}
export const getMaterialIndexList = function (data, config) {
	return http.get(API.GET_METERIAL_INDEX_LIST, data, config)
}
export const getMaterialBuyList = function (data, config) {
	return http.get(API.GET_METERIAL_BUY_LIST, data, config)
}
export const getMaterialInfo = function (data, config) {
  const url = API.GET_METERIAL_INFO.replace(/materialId/g, data.materialId)
	return http.get(url, config)
}
export const getTechnologyList = function (data, config) {
  return http.get(API.GET_TECHBOLOGY_LIST, data, config)
}
export const getTechnologyInfo = function (data, config) {
  const url = API.GET_TECHBOLOGY_INFO.replace(/technologyId/g, data.technologyId)
	return http.get(url, config)
}
export const getCaseListColumn = function (data, config) {
  return http.get(API.GET_CASE_LIST_COLUMN, data, config)
}
export const getCaseAllCases = function (data, config) {
  return http.get(API.GET_CASE_ALL_CASES, data, config)
}
// caseType
export const getCaseListCase = function (data, config) {
  return http.get(API.GET_CASE_LIST_CASE, data, config)
}
// id
export const getCaseDetail = function (data, config) {
  return http.get(API.GET_CASE_DETAIL, data, config)
}
export const getCaseRandomCase = function (data, config) {
  return http.get(API.GET_CASE_RANDOM_CASE, data, config)
}
export const getNewsList = function (data, config) {
  return http.get(API.GET_NEWS_LIST, data, config)
}
export const getNewsDetail = function (data, config) {
  return http.get(API.GET_NEWS_DETAIL, data, config)
}
export const getConfigData = function (data, config) {
  return http.get(API.GET_CONFIG_DATA, data, config)
}

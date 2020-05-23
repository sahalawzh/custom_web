import http from '@/utils/http'

const BASE_URL = ''

export const API = {
	// 测试
	GET_TEST: `${BASE_URL}/test`
}

export const getTest = function (data, config) {
	return http.get(API.GET_TEST, data, config)
}

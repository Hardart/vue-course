import http from '@/api/http'

export async function all(params) {
	let { data, headers } = await http.get(`/test`, params)
	console.log(data)
	return { data, headers }
}

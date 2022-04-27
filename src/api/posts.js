import http from '@/api/http'

export async function all(params) {
	let { data, headers } = await http.get(`/posts`, params)

	return { data, headers }
}

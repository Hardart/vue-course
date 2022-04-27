import * as postsApi from '@/api/posts.js'
export default {
	namespaced: true,
	state: {
		posts: [],
		searchQuery: '',
		selectedOption: 'id',
		options: [
			{ value: 'id', name: 'по id' },
			{ value: 'title', name: 'по названию' },
			{ value: 'body', name: 'по тексту' },
		],
		dataLoading: false,
		orderBy: 1,
		currentPage: 1,
		limitPosts: 9,
		totalPages: 1,
		isLoad: false,
		allPostsIsLoad: false,
	},
	getters: {
		one: (state) => (id) => state.posts.find((p) => p.id == id),
		sort: (state) => [...state.posts].sort((a, b) => (a[state.selectedOption] > b[state.selectedOption] ? state.orderBy : -state.orderBy)),
		search: (state, getters) => getters.sort.filter((p) => p.title.toLowerCase().includes(state.searchQuery.toLowerCase())),
		params: (state) => ({ params: { _limit: state.limitPosts, _page: state.currentPage } }),
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts
		},
		setCurrentPage(state, number) {
			state.currentPage += number
		},
		setTotalPages(state, total) {
			state.totalPages = total
		},
		isLoad(state, bool) {
			state.isLoad = bool
		},
		allPostsIsLoad(state, bool) {
			state.allPostsIsLoad = bool
		},
		sortPosts(state, index) {
			state.orderBy = index
		},
	},

	actions: {
		async load({ state, commit, getters }) {
			commit('allPostsIsLoad', false)
			const { data, headers } = await postsApi.all(getters.params)
			commit('setPosts', data)
			commit('allPostsIsLoad', true)
			commit('setTotalPages', Math.floor(headers['x-total-count'] / state.limitPosts))

			return data
		},

		async loadMore({ state, commit, getters }) {
			try {
				commit('setCurrentPage', 1)
				commit('isLoad', true)
				const { data, headers } = await postsApi.all(getters.params)
				commit('setTotalPages', Math.floor(headers['x-total-count'] / state.limitPosts))
				commit('setPosts', [...state.posts, ...data])
			} catch (error) {
				console.log(error)
			} finally {
				commit('isLoad', false)
			}
		},
		sortAsc({ commit }) {
			commit('sortPosts', 1)
		},
		sortDesc({ commit }) {
			commit('sortPosts', -1)
		},
	},
}

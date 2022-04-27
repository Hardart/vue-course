import { createStore } from 'vuex'

import posts from './posts'

export default createStore({
	state: {},
	modules: {
		posts,
	},
})

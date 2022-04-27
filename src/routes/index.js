import Main from '@/pages/Main'
import Posts from '@/pages/Posts'
import SinglePost from '@/pages/SinglePost'
import Page404 from '@/pages/Page404'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/news',
		component: Posts,
	},
	{
		path: '/:any(.*)',
		component: Page404,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router

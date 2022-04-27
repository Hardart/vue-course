import { createApp } from 'vue'
import App from './App'
import uiComponets from '@/components/UI'
import directives from '@/directives'
import store from '@/store'
import router from '@/routes'


const app = createApp(App)

uiComponets.forEach((component) => {
	app.component(component.name, component)
})
directives.forEach((directive) => {
	app.directive(directive.name, directive)
})

app.use(store).use(router).mount('#app')

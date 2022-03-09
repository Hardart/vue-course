import { createApp } from 'vue'
import App from './App'
import uiComponets from '@/components/UI'

const app = createApp(App)
uiComponets.forEach((component) => {
	app.component(component.name, component)
})

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'; 
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
app.use(pinia)

app.use(router)

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElIconModules from '@element-plus/icons-vue'
import './assets/fonts/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
Object.keys(ElIconModules).forEach( key => {
  app.component(key, ElIconModules[key])
})
app.mount('#app')
import Vue from 'vue'
import index from 'components/login/index.vue'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import { sync } from 'vuex-router-sync'

Vue.use(Element)

sync(store, router)

const app = new Vue({
	router,
    store,
    ...index
})

app.$mount('#app')

//入口js

import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'js-cookie'
import index from 'components/login/index.vue'
import login from 'components/login/login.vue'
import register from 'components/login/register.vue'

Vue.use(VueRouter)

const scrollBehavior = to => {
    const position = {}
    if (to.hash) {
        position.selector = to.hash
    }
    if (to.matched.some(mm => mm.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
    }
    return position
}

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    scrollBehavior,
    routes: [
        { name:'index', path: '/', component: login },
        { name:'login', path: '/login', component: login },
        { name:'register', path: '/register', component: register }
    ]
})

export default router

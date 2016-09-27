import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'js-cookie'

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

const login = resolve => {
  require.ensure(['components/login/login.vue'], () => {
    resolve(require('components/login/login.vue'))
  })
}

const register = resolve => {
  require.ensure(['components/login/register.vue'], () => {
    resolve(require('components/login/register.vue'))
  })
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

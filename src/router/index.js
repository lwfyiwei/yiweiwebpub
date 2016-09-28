import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'js-cookie'
import store from '../store/'

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

const guardRoute = (route, redirect, next) => {
    let isLogin = store.state.user.isLogin
    if (!isLogin) {
        redirect('/')
    } else {
        next()
    }
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
        { name:'regi', path: '/register', component: register, beforeEnter: guardRoute, meta: {requiresAuth: true }}
    ]
})

router.beforeEach((route, redirect, next) => {
    console.log('router.beforeEach')
    next()
})

router.afterEach(route => {
    console.log('router.afterEach')
})

export default router

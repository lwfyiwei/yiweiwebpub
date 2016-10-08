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
    }, 'user')
}

const register = resolve => {
    require.ensure(['components/login/register.vue'], () => {
        resolve(require('components/login/register.vue'))
    }, 'user')
}

const main = resolve => {
    require.ensure(['components/main/index.vue'], () => {
        resolve(require('components/main/index.vue'))
    }, 'main')
}

const welcome = resolve => {
    require.ensure(['components/main/welcome.vue'], () => {
        resolve(require('components/main/welcome.vue'))
    }, 'main')
}

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    scrollBehavior,
    routes: [
        { name:'index', path: '/', component: login },
        { name:'login', path: '/login', component: login },
        { name:'regi', path: '/register', component: register},
        { name:'main', path: '/main', component: main,
            children: [
                { path: 'welcome', component: welcome },
            ],  beforeEnter: guardRoute, meta: {requiresAuth: true }}
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

import {
    GLOBAL_HIDEMSG,
    GLOBAL_LOADDING,
    GLOBAL_PROGRESS,
    GLOBAL_SHOWMSG
} from '../mutation-types'

const state = {
    isLogin: true,
    userName:'',
    userMail:'',
    accountBalance:''
}

const mutations = {
    [USER_ISLOGIN](state, isLogin) {
        state.isLogin = isLogin
    },
    [USER_USERNAME](state, num) {
        state.progress = num
    },
    [GLOBAL_SHOWMSG](state, action) {
        state.message = {...action }
    },
    [GLOBAL_HIDEMSG](state) {
        state.message = {
            type: '',
            content: '',
            title: ''
        }
    }
}

export default {
    state,
    mutations
}

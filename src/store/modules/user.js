import {
    USER_ISLOGIN,
    USER_USERNAME
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
    [USER_USERNAME](state, userName) {
        state.userName = userName
    }
}

export default {
    state,
    mutations
}

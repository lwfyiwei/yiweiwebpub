/* global document, window */

import * as types from './mutation-types'
import api from '../api'


export const updateUserName = ({ commit, rootState }, data) => {
        commit(types.USER_USERNAME, data)
}

export const updateLoginStatus = ({ commit, state, rootState }, data) => {
        commit(types.USER_ISLOGIN, data)
}

export const setLoading = ({ commit, state, rootState }, data) => {
        commit(types.SET_LOADING, data)
}
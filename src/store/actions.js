/* global document, window */

import * as types from './mutation-types'
import api from '../api'
import toastr from 'toastr'
toastr.options.positionClass = 'toast-top-center'

export const showMsg = ({commit}, config) => {
    let content, type
    if (typeof config === 'string') {
        content = config
        type = 'error'
    } else {
        content = config.content
        type = config.type
    }
    toastr[type](content)
}

export const hideMsg = () => {
    toastr.clear()
}

export const updateUserName = ({ commit }, data) => {
        commit(types.USER_USERNAME, data)
}
/* global $ */
import Vue from 'vue'
import store from '../store'
import VueResource from 'vue-resource'
import * as types from '../store/mutation-types'

var hostdoamin = ""
if(process.env.NODE_ENV === 'production'){
    hostdoamin = 'http://localhost:3000'
}

if (process.env.NODE_ENV === 'test') {
    hostdoamin = 'http://test.com'
}

Vue.use(VueResource)

Vue.http.options.root = ""
Vue.http.options.emulateJSON = true
Vue.http.options.timeout = 10000
Vue.http.options.xhr = { withCredentials: true }
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.before = function(){
    console.log('Vue.http.options.before')
    store.commit(types.SET_LOADING, true)
}

export default {
    getDataByVR(url, param) {
        return new Promise((resolve, reject) => {
            Vue.http['post'](`${hostdoamin}/${url}`, param).then(data => {
                store.commit(types.SET_LOADING, false)
                resolve(data.body)
            }, error => {
                store.commit(types.SET_LOADING, false)
                reject(error)
            })
        })
    }
}

/* global $ */
import Vue from 'vue'
import store from '../store'
import VueResource from 'vue-resource'

var hostdoamin = ""
if(process.env.NODE_ENV === 'production'){
    hostdoamin = 'http://prod.com'
}

if (process.env.NODE_ENV === 'test') {
    hostdoamin = 'http://test.com'
}

Vue.use(VueResource)

Vue.http.options.root = ""
Vue.http.options.emulateJSON = true
Vue.http.options.xhr = { withCredentials: true }

export default {
    getDataByVR(url, param) {
        return new Promise((resolve, reject) => {
            Vue.http['post'](`${hostdoamin}/${url}`, param).then(data => {
                resolve(data.body)
            }, error => {
                reject(error)
            })
        })
    }
}

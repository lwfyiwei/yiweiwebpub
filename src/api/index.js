/* global $ */
import store from '../store'

var hostdoamin = ""
if(process.env.NODE_ENV === 'production'){
    hostdoamin = 'http://production.com'
}

if (process.env.NODE_ENV === 'test') {
    hostdoamin = 'http://test.com'
}

$.ajaxSetup({
    url: `${hostdoamin}/api/`,
    global: true,
    type: 'POST',
    dataType: 'json'
})

export default {
    getFromConfig(config) {
        return new Promise((resolve, reject) => {
            $.ajax({ data: config }).then(data => {
                resolve(data)
            }, error => {
                store.dispatch('showMsg', error.responseText.toString())
                reject(error)
            })
        })
    },
    getData(config) {
        return new Promise((resolve, reject) => {
            $.ajax({url: `${hostdoamin}/${config.url}`, global: false, data: config }).then(data => {
                resolve(data)
            }, error => {
                store.dispatch('showMsg', error.responseText.toString())
                reject(error)
            })
        })
    }
}

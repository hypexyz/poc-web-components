import Vue from 'vue'

import './register-web-components'

import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['users-list']

new Vue({
    render: h => h(App)
}).$mount('#app')

require('./bootstrap');
import './bootstrap'
import Vue from 'vue'
import router from './Router/router.js'
import axios from 'axios'
import MainPage from './components/AppHome'
import User from './Helpers/User'

window.Vue = require('vue');
window.axios = axios;
window.User = User
window.EventBus = new Vue();

const app = new Vue({
    components: {
        app: MainPage
    },
    router
}).$mount('#app');

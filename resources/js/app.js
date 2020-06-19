require('./bootstrap');
import './bootstrap'
import Vue from 'vue'
import router from './Router/router.js'
import axios from 'axios'
import MainPage from './components/AppHome'

window.Vue = require('vue');
window.axios = axios;

const app = new Vue({
    components: {
        app: MainPage
    },
    router
}).$mount('#app');

import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../components/AppHome'
import Login from '../components/auth/login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/login',
            name: 'login',
            meta: { layout: 'none'},
            component: Login
        }
    ]
})

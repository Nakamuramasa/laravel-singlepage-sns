import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../components/articles/card'
import Login from '../components/auth/login'
import Register from '../components/auth/register'
import Logout from '../components/auth/logout'
import Create from '../components/articles/create'

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
        },
        {
            path: '/register',
            name: 'register',
            meta: { layout: 'none'},
            component: Register
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/articles/create',
            name: 'create',
            component: Create
        }
    ]
})

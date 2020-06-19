import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../components/AppHome'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        }
    ]
})

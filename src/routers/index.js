/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-12 21:34:18
 * @LastEditTime: 2019-08-09 13:45:14
 * @LastEditors: Please set LastEditors
 */

 
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'

Vue.use(Router);

import SignIn from '@/views/SignIn.vue';

import Dashboard from './Dashboard';
import DashboardIndex from '@/views/Dashboard/index.vue';

import Hosts from './Hosts';
import HostsIndex from '@/views/Hosts/index.vue';

const routes = [
    {
        // 默认进入仪表盘
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: {requireAuth: false}
    },
    {
        path: '/dashboard',
        component: DashboardIndex,
        redirect: '/dashboard/welcome',
        children: Dashboard
    },
    {
        //主机管理
        path: '/hosts',
        component: HostsIndex,
        redirect: '/hosts/list',
        children: Hosts
    }
];


const router = new Router({
    mode: 'history',
    routes
});

//导航守卫
router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth === false){
        next();
    }else{
        const authorized = store.getters['BuiltIn/Account/authorized'];
        if(authorized){
            next();
        }else{
            next({name: 'SignIn'});
        }
    }
})

export { routes };
export default router;
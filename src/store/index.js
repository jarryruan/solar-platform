/*
 * @Description: In User Settings Edit
 * @Author: jarryruan
 * @Date: 2019-08-05 13:13:26
 * @LastEditTime: 2019-08-09 13:29:53
 * @LastEditors: Please set LastEditors
 */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import StoreBuilder from './StoreBuilder';
import StoragePlugin from '@/store/plugins/StoragePlugin';

import BuiltIn from './BuiltIn/';
import Hosts from './Hosts/';


const store = StoreBuilder.build({
    modules: {
        BuiltIn,
        Hosts
    },
    plugins: [
        //需要持久化的State列表
        new StoragePlugin('BuiltIn/Account', localStorage),
        new StoragePlugin('BuiltIn/Settings', localStorage),
        new StoragePlugin('Hosts', localStorage)
    ],
});


export default store;
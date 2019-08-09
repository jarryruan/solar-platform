/*
 * @Description: Vuex 持久化插件
 * @Author: your name
 * @Date: 2019-08-05 14:21:27
 * @LastEditTime: 2019-08-09 13:31:55
 * @LastEditors: Please set LastEditors
 */
import loadash from 'lodash';
import lodash from 'lodash'
import md5 from 'md5'

import util from '@/util'

function StoragePlugin(namespace = '', storage = sessionStorage){
    namespace = lodash.trim(namespace, '/');
    const key = loadash.toUpper(md5(`store:${namespace}/`));
    const keyPath = namespace.split('/');


    return (store) => {
        let history = util.algorithm.decryptAES(storage.getItem(key));
        if(history){
            history = JSON.parse(history);
            store.commit(`${namespace}/assign`, { state: history });
        }
        
        store.subscribe((mutation, state) => {
            if(loadash.startsWith(mutation.type, namespace)){
                let currentState;
                if(namespace === ''){
                    currentState = state;
                }else{
                    currentState = lodash.get(state, keyPath);
                }
                
                storage.setItem(key, util.algorithm.encryptAES(JSON.stringify(currentState)));
            }
        });
    }
}

export default StoragePlugin;
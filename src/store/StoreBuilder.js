import lodash from 'lodash';
import Vuex from 'vuex';

function _buildParam(options){
    const { state } = options;
    
    const mutations = {};
    const actions = {};
    const modules = {};
    
    //为state中的每个子元素增加setter
    if(options.state){
        Object.keys(state).forEach((key) => {
            const mutationName = `set${lodash.upperFirst(key)}`;
            mutations[mutationName] = function(state, payload){
                state[key] = payload[key];
            };
         });
    }
    //增加assign方法（即全局setter）
    mutations['assign'] = function(state, payload){
        Object.assign(state, payload.state)
    };
    Object.assign(mutations, options.mutations);

    //为每个Mutation构造Action
    Object.keys(mutations).forEach((mutationName) => {
        actions[mutationName] = function({ commit }, payload){
            commit(mutationName, payload);
        }
    });
    Object.assign(actions, options.actions);

    
    if(options.modules){
        Object.keys(options.modules).forEach((key) => {
            modules[key] = _buildParam(options.modules[key])
        });
    }

    return Object.assign({}, options, {
        namespaced: (options.namespaced === false) ? false : true,
        mutations,
        actions,
        modules
    });
    
}


export default { 
    build: function(options){
        return new Vuex.Store(_buildParam(options));
    }
};
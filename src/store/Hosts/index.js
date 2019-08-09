export default {
    state: {
        hostList: []
    },
    mutations: {
        deleteHost(state, { index }){
            state.hostList.splice(index, 1);
        },
        createHost(state, { host }){
            state.hostList.push(host);
        },
        triggerAvailability(state, { index }){
            state.hostList[index].disabled = !state.hostList[index].disabled;
        },
    }
}
export default {
    state: {
        user: null
    },
    getters: {
        username(state){
            const { user } = state;
            if(user && user.name){
                return user.name;
            }else{
                return null;
            }
        },
        authorized(state, getters){
            return getters.username !== null;
        }
    }
}
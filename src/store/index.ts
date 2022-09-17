import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            token :''
        }
    },

    mutations: {
        setToken(state,val) {
            state.token = val
        }
    },

    getters: {
        Token: state => {return state.token}
    }
})

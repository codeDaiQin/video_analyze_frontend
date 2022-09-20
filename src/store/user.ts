import { State } from "."

export const userVuex = {
    state: {
        name: '',
        email: '',
        uid: '',
    },

    action: {
        
    },

    mutations: {
        setUser(state : State, result : any) {
            state.user.name = result.name
            state.user.email = result.email
            state.user.uid = result.uid
        },
        removeUserInfo(state : State) {
            state.user.name = ''
            state.user.email = ''
            state.user.uid = ''
        }
    }, 
} 


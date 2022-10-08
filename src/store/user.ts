import { State } from "."

export const userVuex = {
    state: {
        name: '',
        email: '',
        uid: '',
        avater:'',
        exp: 0,
    },

    action: {
        
    },

    mutations: {
        setUser(state : State, result : any) {
            state.user.name = result.name
            state.user.email = result.email
            state.user.uid = result.uid
            state.user.avater = result.avater
            state.user.exp = result.exp
        },
        removeUserInfo(state : State) {
            state.user.name = ''
            state.user.email = ''
            state.user.uid = ''
            state.user.avater = ''
            state.user.exp = 0
        }
    }, 
} 


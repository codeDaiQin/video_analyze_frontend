import { InjectionKey } from 'vue'
import { createStore, Mutation, Store } from 'vuex'
import { User } from "../interface/user";
import { userVuex } from "./user";

export interface State {
    user: User
}


export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        user: userVuex.state
    },
    mutations: userVuex.mutations    
})
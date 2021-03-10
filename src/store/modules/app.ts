import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {CLOSE_SIDE_BAR, OPEN_SIDE_BAR, SWITCH_DESKTOP, SWITCH_MOBILE} from "@/store/mutation-types";
import {RootStateType} from "@/store/types";

export type AppType = {
    isMobile: boolean
    isDesktop: boolean
}

const state: AppType = {
    isMobile: false,
    isDesktop: true
}

const mutations: MutationTree<AppType> = {
    [SWITCH_MOBILE](state) {
        state.isMobile = true
        state.isDesktop = false
    },
    [SWITCH_DESKTOP](state) {
        state.isMobile = false
        state.isDesktop = true
    }
}

const actions: ActionTree<AppType, RootStateType> = {
    setMobile({commit, dispatch}) {
        commit(SWITCH_MOBILE)
    },
    setDesktop({commit, dispatch}) {
        commit(SWITCH_DESKTOP)
        dispatch('sideBar/closeSideBar', {}, {root: true})
    }
}

const getters: GetterTree<AppType, RootStateType> = {
    getAppStatus(state): AppType {
        return state
    }
}

export const app: Module<AppType, RootStateType> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

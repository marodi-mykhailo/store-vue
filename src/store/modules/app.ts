import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {CLOSE_SIDE_BAR, OPEN_SIDE_BAR, SWITCH_DESKTOP, SWITCH_MOBILE, TOGGLE_MODAL} from "@/store/mutation-types";
import {RootStateType} from "@/store/types";

export type AppType = {
    isMobile: boolean
    isDesktop: boolean
    isModalOpen: boolean
}

const state: AppType = {
    isMobile: false,
    isDesktop: true,
    isModalOpen: false
}

const mutations: MutationTree<AppType> = {
    [SWITCH_MOBILE](state) {
        state.isMobile = true
        state.isDesktop = false
    },
    [SWITCH_DESKTOP](state) {
        state.isMobile = false
        state.isDesktop = true
    },
    [TOGGLE_MODAL](state) {
        if (state.isModalOpen) {
            state.isModalOpen = false
        } else {
            state.isModalOpen = true
        }
    }
}

const actions: ActionTree<AppType, RootStateType> = {
    setMobile({commit, dispatch}) {
        commit(SWITCH_MOBILE)
    },
    setDesktop({commit, dispatch}) {
        commit(SWITCH_DESKTOP)
        dispatch('sideBar/closeSideBar', {}, {root: true})
    },
    toggleModal({commit}) {
        commit(TOGGLE_MODAL)
    }

}

const getters: GetterTree<AppType, RootStateType> = {
    getAppStatus(state): AppType {
        return state
    },
    getModalStatus(state): boolean {
        return state.isModalOpen
    }
}

export const app: Module<AppType, RootStateType> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

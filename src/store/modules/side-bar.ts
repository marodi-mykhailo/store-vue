import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {CLOSE_SIDE_BAR, OPEN_SIDE_BAR} from "@/store/mutation-types";
import {RootStateType} from "@/store/types";

export type SideBarStateType = {
    isOpen: boolean
}

const state: SideBarStateType = {
    isOpen: false
}


const mutations: MutationTree<SideBarStateType> = {
    [OPEN_SIDE_BAR](state) {
        state.isOpen = true
    },
    [CLOSE_SIDE_BAR]() {
        state.isOpen = false
    }
}

const actions: ActionTree<SideBarStateType, RootStateType> = {
    openSideBar({commit}): void {
        commit(OPEN_SIDE_BAR)
    },
    closeSideBar({commit}): void {
        commit(CLOSE_SIDE_BAR)
    }
}

const getters: GetterTree<SideBarStateType, RootStateType> = {
    getSideBarStatus(state): boolean {
        return state.isOpen
    }
}

export const sideBar: Module<SideBarStateType, RootStateType> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {CartProductType, RootState} from "@/store/types";
import {SET_TO_CART} from "@/store/mutation-types";
import {ProductStoreType} from "@/store/modules/product";

type CartStateType = CartProductType[]

const state: CartStateType = []

const mutations: MutationTree<CartStateType> = {
    [SET_TO_CART](state, productId: number) {
        const product = state.find(item => item.id === productId)
        if (product) {
            product.count += 1
        } else {
            state.push({id: productId, count: 0})
        }
    }
}

const actions: ActionTree<CartStateType, RootState> = {
    setToCart({commit}, productId: number): void {
        commit(SET_TO_CART, productId)
    }
}

const getters: GetterTree<CartStateType, RootState> = {
    getCartData(state): CartStateType {
        return state
    }
}


export const cart: Module<CartStateType, RootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

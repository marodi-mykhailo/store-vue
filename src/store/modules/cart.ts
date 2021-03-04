import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {CartItemType, RootStateType} from "@/store/types";
import {
    DECREMENT_CART_ITEM_COUNT,
    DELETE_FROM_CART,
    INCREMENT_CART_ITEM_COUNT,
    SET_TO_CART
} from "@/store/mutation-types";

export type CartStateType = CartItemType[]

const state: CartStateType = []

const mutations: MutationTree<CartStateType> = {
    [SET_TO_CART](state, productData: CartItemType) {
        const product = state.find(item => item.id === productData.id)
        if (product) {
            product.count += 1
        } else {
            state.push({...productData, count: 1})
        }
    },
    [INCREMENT_CART_ITEM_COUNT](state, itemId: number) {
        const product = state.find(item => item.id === itemId)
        if (product) {
            product.count += 1
        } else {
            return;
        }
    },
    [DECREMENT_CART_ITEM_COUNT](state, itemId: number) {
        const product = state.find(item => item.id === itemId)
        if (product && product.count > 1) {
            product.count -= 1
        } else {
            return;
        }
    },
    [DELETE_FROM_CART](state, itemId: number) {
        const index = state.findIndex(item => item.id === itemId)
        console.log(state)
        state.splice(index, 1)
    }
}

const actions: ActionTree<CartStateType, RootStateType> = {
    setToCart({commit}, productData: CartItemType): void {
        commit(SET_TO_CART, productData)
    },
    incrementCartItemCount({commit}, itemId: number): void {
        commit(INCREMENT_CART_ITEM_COUNT, itemId)
    },
    decrementCartItemCount({commit}, itemId: number): void {
        commit(DECREMENT_CART_ITEM_COUNT, itemId)
    },
    deleteFromCart({commit}, itemId: number): void {
        commit(DELETE_FROM_CART, itemId)
    }
}

const getters: GetterTree<CartStateType, RootStateType> = {
    getCartData(state): CartStateType {
        return state
    }
}


export const cart: Module<CartStateType, RootStateType> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

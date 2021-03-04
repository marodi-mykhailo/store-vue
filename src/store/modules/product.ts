// initial state
import {ProductDataType, ProductDataForCartType, ProductType, RootStateType} from "@/store/types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {SET_PRODUCTS} from "@/store/mutation-types";
import {storeAPI} from "@/api/api";

export interface ProductStoreType {
    products: ProductType[]
}

const state: ProductStoreType = {
    products: []
}

const mutations: MutationTree<ProductStoreType> = {
    [SET_PRODUCTS](state, payload: ProductType[]) {
        state.products = payload
    }
}

const actions: ActionTree<ProductStoreType, RootStateType> = {
    fetchProducts({commit}): void {
        storeAPI.getProducts().then(res => {
            if (res) {
                commit(SET_PRODUCTS, res.data)
            }
        })
    }
}

const getters: GetterTree<ProductStoreType, RootStateType> = {
    getDataForCard(state): ProductDataType[] {
        return state.products.map(item => ({
            id: item.id,
            productName: item.product_name,
            price: item.price
        }))
    },
    getDataForCart(state): ProductDataForCartType[] {
        return state.products.map(item => ({
            id: item.id,
            productName: item.product_name,
            price: item.price,
            shortDescription: item.short_description
        }))
    }
}


export const product: Module<ProductStoreType, RootStateType> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

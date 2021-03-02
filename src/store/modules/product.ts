// initial state
import {ProductType, RootState} from "@/store/types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {SET_PRODUCTS} from "@/store/mutation-types";
import {storeAPI} from "@/api/api";

export interface ProductStoreType {
    products: ProductType[]
}

export type GetDataForCardType = {
    id: number,
    productName: string,
    price: string
}

const state: ProductStoreType = {
    products: []
}

const mutations: MutationTree<ProductStoreType> = {
    [SET_PRODUCTS](state, payload: ProductType[]) {
        state.products = payload
    }
}

const actions: ActionTree<ProductStoreType, RootState> = {
    fetchProducts({commit}): void {
        storeAPI.getProducts().then(res => {
            if (res) {
                commit(SET_PRODUCTS, res.data)
            }
        })
    }
}

const getters: GetterTree<ProductStoreType, RootState> = {
    getDataForCard(state): GetDataForCardType[] {
        return state.products.map(item => ({
            id: item.id,
            productName: item.product_name,
            price: item.price
        }))
    }
}


export const product: Module<ProductStoreType, RootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

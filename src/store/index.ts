import {product} from "@/store/modules/product";
import {cart} from "@/store/modules/cart";

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    modules: {
        product,
        cart
    },
})

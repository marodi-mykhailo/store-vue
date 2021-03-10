import {product} from "@/store/modules/product";
import {cart} from "@/store/modules/cart";

import Vue from 'vue'
import Vuex from 'vuex'
import {sideBar} from "@/store/modules/side-bar";
import {app} from "@/store/modules/app";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    modules: {
        product,
        cart,
        sideBar,
        app
    },
})

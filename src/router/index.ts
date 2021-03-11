import vMainPage from '../views/v-main-page.vue'
import vCartPage from "@/views/v-cart-page.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import VProductItemPage from "@/views/v-product-item-page.vue";
import VNotFound from "@/components/v-not-found.vue";

const routes = [
    {
        path: '/',
        alias: '/main',
        name: 'mainPage',
        component: vMainPage
    },
    {
        path: '/cart',
        name: 'cartPage',
        component: vCartPage
    },
    {
        path: '/product/:productId',
        name: 'productItem',
        component: VProductItemPage

    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: VNotFound
    },

];

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router;

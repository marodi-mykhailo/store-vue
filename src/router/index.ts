import vMainPage from '../views/v-main-page.vue'
import vCartPage from "@/views/v-cart-page.vue";
import VueRouter from "vue-router";
import Vue from "vue";

const NotFound = {
    template: '<div>NotFound</div>'
}

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
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

];

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router;

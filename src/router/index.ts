import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import vMainPage from '../views/v-main-page.vue'
import vCartPage from "@/views/v-cart-page.vue";

const NotFound = {
    template: '<div>NotFound</div>'
}

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

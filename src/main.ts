import App from "./App.vue";
import Vue from 'vue';

import '@/assets/styles/styles.scss'
import {store} from "@/store";
import router from "@/router";

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')

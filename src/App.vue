<template>
    <div class="container" id="app">
        <v-side-bar></v-side-bar>
        <v-header></v-header>
        <keep-alive>
            <router-view></router-view>
            <v-main-page></v-main-page>
        </keep-alive>
        <!--        <router-view v-slot="{ Component }">-->
        <!--            <component :is="Component" @event-test="$emit('new-test-event')"/>-->
        <!--        </router-view>-->
    </div>
</template>

<script lang="ts">
    import VSideBar from './components/v-side-bar.vue'
    import vMainPage from './views/v-main-page.vue'
    import vHeader from "@/components/v-header.vue";
    import {Vue, Component} from "vue-property-decorator";
    import {Action} from "vuex-class";

    @Component({
        components: {
            VSideBar,
            vHeader,
            vMainPage,

        }
    })
    export default class App extends Vue {
        @Action("product/fetchProducts") fetchProducts!: () => void

        mounted() {
            this.fetchProducts()
            // @ts-ignore
            window.store = this.$store.state
        }


    }

</script>

<style lang="scss">
    #app {
        color: #2c3e50;
    }

</style>

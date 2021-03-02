<template>
    <div class="container" id="app">
        <v-side-bar></v-side-bar>
        <v-header></v-header>
        <router-view v-slot="{ Component }">
            <component :is="Component" @event-test="$emit('new-test-event')"/>
        </router-view>
    </div>
</template>

<script lang="ts">
    import vSideBar from './components/v-side-bar.vue'
    import vMainPage from './views/v-main-page.vue'
    import {Vue, Options} from "vue-class-component";
    import vHeader from "@/components/v-header.vue";

    @Options(
        {
            name: 'app',
            components: {
                vSideBar,
                vHeader,
                vMainPage,

            }
        }
    )
    export default class App extends Vue {
        data() {
            return {}
        }

        mounted() {
            this.$store.dispatch('product/fetchProducts')
            //@ts-ignore
            window.store = this.$store.state
        }
    }

</script>

<style lang="scss">
    #app {
        color: #2c3e50;
    }

</style>

<template>
    <div class="container" id="app">
        <v-side-bar></v-side-bar>
        <v-catalog></v-catalog>
    </div>
</template>

<script lang="ts">
    import vSideBar from './components/v-side-bar.vue'
    import vCatalog from './views/v-catalog.vue'
    import {Vue, Options} from "vue-class-component";

    @Options(
        {
            name: 'app',
            components: {
                vSideBar, vCatalog
            }
        }
    )
    export default class App extends Vue {
        data() {
            return {}
        }

        mounted(){
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

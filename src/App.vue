<template>
    <div class="container" id="app">
        <v-side-bar/>
    </div>
</template>

<script lang="ts">
    import vSideBar from './components/v-side-bar.vue'

    export default {
        name: "app",
        components: {
            vSideBar
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

</style>

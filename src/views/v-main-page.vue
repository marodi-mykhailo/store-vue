<template>
    <div class="v-main-page">
        <v-top-image></v-top-image>
        <v-products></v-products>
    </div>
</template>

<script lang="ts">
    import vTopImage from '../components/v-top-image.vue';
    import vProducts from '../components/v-products.vue';
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        components: {
            vTopImage,
            vProducts
        }
    })
    export default class VMainPage extends Vue {

    }
</script>

<style lang="scss">
    .v-main-page {

    }
</style>

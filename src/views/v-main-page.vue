<template>
    <div class="v-main-page contentLeftMargin">
        <v-top-image/>
        <v-products/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import vTopImage from '../components/v-top-image.vue';
    import vProducts from '../components/v-products.vue';

    export default defineComponent({
        name: "v-main-page",
        components: {
            vTopImage,
            vProducts
        }
    })
</script>

<style lang="scss">
    .v-main-page {

    }
</style>

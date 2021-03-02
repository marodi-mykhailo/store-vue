<template>
    <div class="v-catalog">
        <v-header/>
        <v-top-image/>
        <v-products/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import vHeader from '../components/v-header.vue';
    import vTopImage from '../components/v-top-image.vue';
    import vProducts from '../components/v-products.vue';

    export default defineComponent({
        name: "v-catalog",
        components: {
            vHeader,
            vTopImage,
            vProducts
        }
    })
</script>

<style lang="scss">
    .v-catalog {
        margin-left: 250px;
    }
</style>

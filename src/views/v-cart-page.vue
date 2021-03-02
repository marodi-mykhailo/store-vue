<template>
    <div class="v-cart-page contentLeftMargin">
        <v-cart-item></v-cart-item>
    </div>
</template>

<script lang="ts">
    import vCartItem from "@/components/v-cart-item.vue";
    import {Options, Vue} from "vue-class-component";
    @Options({
        name: "v-cart-page",
        components: {
            vCartItem
        }
    })
    export default class VCartPage extends Vue{

    }
</script>

<style lang="scss">

</style>

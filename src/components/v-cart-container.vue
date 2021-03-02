<template>
    <div></div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {mapGetters} from "vuex";

    @Options({
        name: 'v-cart-container',
        computed: {
            ...mapGetters('cart', {
                cartData: 'getCartData'
            }),
            ...mapGetters('product', {
                cardInfo: 'getDataForCard'
            }),
        }
    })
    export default class VCartContainerComponent extends Vue {

    }
</script>

<style lang="scss">

</style>

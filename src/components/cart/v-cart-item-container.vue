<template>
    <div>
        <v-cart-item v-for="item in cartData"
                     :key="item.id"
                     :itemData="item"
                     @incrementCount="incrementCount"
                     @decrementCount="decrementCount"
                     @deleteItemFromCart="deleteItemFromCart"
        >
        </v-cart-item>
    </div>
</template>

<script lang="ts">
    import VCartItem from "@/components/cart/v-cart-item.vue";
    import {ProductDataForCartType} from "@/store/types";
    import {Vue, Component} from "vue-property-decorator";
    import {Action, Getter} from "vuex-class";
    import {CartStateType} from "@/store/modules/cart";

    @Component({
        components: {
            VCartItem
        }
    })
    export default class VCartItemContainer extends Vue {
        @Getter("cart/getCartData") cartData!: CartStateType

        @Action("cart/incrementCartItemCount") incrementCartItemCount!: (itemId: number) => void
        @Action("cart/decrementCartItemCount") decrementCartItemCount!: (itemId: number) => void
        @Action("cart/deleteFromCart") deleteFromCart!: (itemId: number) => void

        incrementCount(itemId: number) {
            this.incrementCartItemCount(itemId)
        }

        decrementCount(itemId: number) {
            this.decrementCartItemCount(itemId)
        }

        deleteItemFromCart(itemId: number){
            this.deleteFromCart(itemId)
        }

    }
</script>

<style lang="scss">

</style>

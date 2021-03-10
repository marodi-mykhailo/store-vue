<template>
    <div v-if="cartData.length" class="v-cart-page">
        <v-cart-item-container></v-cart-item-container>
        <v-checkout-btn></v-checkout-btn>
    </div>
    <div v-else class="v-cart-page">
        <div class="v-cart-page__empty-wrapper">
            <img class="v-cart-page__empty-img" src="@/assets/images/empty_cart.svg" alt="empty_cart">
            <h1 class="v-cart-page__empty-title">Cart is empty</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import VCartItemContainer from "@/components/v-cart-item-container.vue";
    import {Vue, Component} from "vue-property-decorator";
    import VCheckoutBtn from "@/components/v-checkout-btn.vue";
    import {Getter} from "vuex-class";
    import {CartStateType} from "@/store/modules/cart";

    @Component({
        components: {
            VCartItemContainer,
            VCheckoutBtn
        }
    })
    export default class VCartPage extends Vue {
        @Getter("cart/getCartData") cartData!: CartStateType

    }
</script>

<style lang="scss">
    .v-cart-page {
        margin-bottom: 60px;

        &__empty {
            &-wrapper {
                width: 90%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            &-img{
                width: 50%;
                align-self: center;
            }

            &-title{
                margin-top: 20px;
                font-size: $large_font_size * 1.5;
            }

        }
    }
</style>

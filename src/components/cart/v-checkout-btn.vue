<template>
    <div v-show="cartData.length" class="v-checkout">
        <button class="v-checkout-btn">
            <i class="fas fa-shopping-cart v-checkout-icon"></i>
            <span class="v-checkout-sum">${{sum.toFixed(2)}}</span>
            <i class="fas fa-shopping-cart v-checkout-icon"></i>
        </button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Getter} from "vuex-class";
    import {CartStateType} from "@/store/modules/cart";
    import {getNumberFromString} from "@/services/getNumberFromString";

    @Component
    export default class VCheckoutBtn extends Vue {
        @Getter("cart/getCartData") cartData!: CartStateType

        get sum() {
            return this.cartData.reduce((acc, currV) => acc + (currV.count * getNumberFromString(currV.price)), 0)
        }
    }
</script>

<style lang="scss">
    .v-checkout {
        width: max-content;
        margin: 0 auto;
        padding: 20px 0;


        &-btn {
            width: 100%;
            background-color: $checkout-btn_color;
            padding: 15px 10px;
            font-size: 24px;
            cursor: pointer;
            color: black;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;


            &:active {
                background-color: red;
                color: white;
            }

        }

        &-sum {
            font-size: 32px;
            padding: 0 10px;
        }

        &-icon {
            margin: 0 10px;
        }
    }
</style>

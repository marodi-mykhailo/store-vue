<template>
    <div class="v-products">
        <div class="v-products__top">
            <p class="v-products__top-count">8 items</p>
        </div>
        <div class="v-products__list">
            <v-product-card v-for="item in cardInfo"
                            :key="item.id"
                            :product-data="item"
                            @add-to-cart="addToCart"
                            :isAddedToCart="isAddedToCart(item.id)"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import vProductCard from './v-product-card.vue'
    import {CartProductType, ProductDataType, ProductDataForCartType} from "@/store/types";
    import {Vue, Component} from "vue-property-decorator";
    import {Action, Getter, namespace} from "vuex-class";
    import {CartStateType} from "@/store/modules/cart";

    // const Products = namespace('modules/product')
    // const Cart = namespace('modules/cart')

    @Component({
        components: {
            vProductCard
        }
    })
    export default class VProducts extends Vue {
        // @Products.Getter("getDataForCard") cardInfo!: ProductDataType[]
        @Getter("product/getDataForCart") cartItemInfo!: ProductDataForCartType[]
        @Getter("product/getDataForCard") cardInfo!: ProductDataType[]
        @Getter("cart/getCartData") cartData!: CartStateType

        // todo: ask why i must use ! and how to delete undefined from types ////
        @Action("cart/setToCart") setToCart!: (product: ProductDataForCartType | undefined) => void


        addToCart(id: number) {
            const product = this.cartItemInfo.find((item: ProductDataForCartType) => item.id === id)
            this.setToCart(product)
        }

        isAddedToCart(id: number) {
            const product = this.cartData?.find((item: CartProductType) => item.id === id)
            return !!product
        }
    }
</script>

<style lang="scss">
    .v-products {

        &__top {
            padding: 0 $padding;
            margin: 15px 0;
            color: $nav_grey;

            &-count {

            }
        }

        &__list {
            filter: grayscale(75%);
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>

<template>
    <v-product-item
            :productData="getProductDataByID"
            :isAddedToCart="isAddedToCart"
            @add-to-cart="addToCart"
    ></v-product-item>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import VProductItem from "@/components/product/v-product-item.vue";
    import {Action, Getter} from "vuex-class";
    import {CartProductType, ProductDataForCartType, ProductItemType} from "@/store/types";
    import {CartStateType} from "@/store/modules/cart";

    @Component({
        components: {
            VProductItem
        }
    })
    export default class VProductItemContainer extends Vue {
        @Getter('product/getProductItemData')
        getProductItemData!: (productId: number) => ProductItemType
        @Getter("product/getDataForCart") cartItemInfo!: ProductDataForCartType[]
        @Getter("cart/getCartData") cartData!: CartStateType


        @Action("cart/setToCart") setToCart!: (product: ProductDataForCartType | undefined) => void

        get getProductDataByID() {
            const productId = Number(this.$route.params.productId)
            return this.getProductItemData(productId)
        }

        addToCart(id: number) {
            const product = this.cartItemInfo.find((item: ProductDataForCartType) => item.id === id)
            this.setToCart(product)
        }

        get isAddedToCart() {
            const id = Number(this.$route.params.productId)
            const product = this.cartData?.find((item: CartProductType) => item.id === id)
            return !!product
        }
    }
</script>

<style lang="scss">

</style>

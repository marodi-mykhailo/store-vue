<template>
    <div class="v-products">
        <div class="v-products__top">
            <p class="v-products__top-count">{{list.length}} items</p>
            <v-pagination :item-per-page="8"
                          :data="cardInfo"
                          @getList="getList"
            ></v-pagination>
        </div>
        <div class="v-products__list">
            <v-product-card v-for="item in list"
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
    import {Action, Getter} from "vuex-class";
    import {CartStateType} from "@/store/modules/cart";
    import VPagination from "@/components/v-pagination.vue";

    @Component({
        components: {
            VPagination,
            vProductCard
        }
    })
    export default class VProducts extends Vue {
        @Getter("product/getDataForCart") cartItemInfo!: ProductDataForCartType[]
        @Getter("product/getDataForCard") cardInfo!: ProductDataType[]
        @Getter("cart/getCartData") cartData!: CartStateType

        @Action("cart/setToCart") setToCart!: (product: ProductDataForCartType | undefined) => void

        list: ProductDataType[] = [];

        addToCart(id: number) {
            const product = this.cartItemInfo.find((item: ProductDataForCartType) => item.id === id)
            this.setToCart(product)
        }


        getList(data: ProductDataType[]) {
            this.list = data
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
            display: flex;
            justify-content: space-between;

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

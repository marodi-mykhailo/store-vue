<template>
    <div class="product-card">
        <div class="product-card__wrapper">
            <img class="product-card__wrapper-img"
                 :src="productData.image || require('@/assets/images/jeans1.jpg')"
                 alt="product-cart-img"
                 @click="toItemPage"
            />
            <span class="product-card__wrapper-mark">New</span>
            <span v-show="this.isAddedToCart"
                  class="product-card__wrapper-mark added">Added</span>
            <div class="product-card__wrapper-btnBox">
                <button v-show="!this.isAddedToCart"
                        class="button product-card__wrapper-btn"
                        @click="addToCart"
                >Buy now <i class="fa fa-shopping-cart"/></button>
            </div>
        </div>
        <p class="product-card-text p-margin">
            <router-link :to="{name: 'productItem', params: {productId: productData.id}}">
                {{productData.productName}}</router-link>
            <br/>
            <b>{{productData.price}}</b>
        </p>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";
    import {ProductDataType} from "@/store/types";
    import router from "@/router";

    @Component({})
    export default class VProductCard extends Vue {
        @Prop() readonly productData!: ProductDataType
        @Prop() readonly isAddedToCart!: boolean

        @Emit()
        addToCart() {
            return this.productData.id
        }

        toItemPage() {
            router.push({name: 'productItem', params: {productId: this.productData.id.toString()}})
        }

    }
</script>

<style lang="scss">
    .product-card {
        padding: 0 $padding;
        flex-basis: 25%;

        &:before {
            content: "";
            display: table;
            clear: both;
        }

        &:after {
            content: "";
            display: table;
            clear: both;
        }

        &__wrapper {
            position: relative;

            &-img {
                width: 100%;
                vertical-align: middle;
                cursor: pointer;
            }

            &-mark {
                position: absolute;
                left: 0;
                top: 0;
                background-color: $black;
                color: #fff;
                display: inline-block;
                padding-left: $padding*0.5;
                padding-right: $padding*0.5;
                text-align: center;
            }

            &-btnBox {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: none;
            }

            &-btn {
                color: #fff !important;
                background-color: $black !important;
            }

            &:hover {
                .product-card__wrapper-btnBox {
                    display: block;
                }
            }
        }

        .added {
            background-color: green;
            right: 0;
            /*left: unset;*/
        }

    }
</style>

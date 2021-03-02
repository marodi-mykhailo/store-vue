<template>
    <div class="product-card">
        <div class="product-card__wrapper">
            <img class="product-card__wrapper-img" src="../assets/images/jeans1.jpg" alt="product-cart-img"/>
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
        <p class="product-card-text p-margin">{{productData.productName}}
            <br/>
            <b>{{productData.price}}</b>
        </p>
    </div>
</template>

<script lang="ts">

    import {Options, Vue} from "vue-class-component";
    import {GetDataForCardType} from "@/store/modules/product";

    class VProductCardProps {
        productData!: GetDataForCardType
        isAddedToCart!: boolean
    }

    @Options({
        name: "v-product-card",
        emits: ['addToCart']
    })
    export default class VProductCard extends Vue.with(VProductCardProps) {
        addToCart() {
            this.$emit('addToCart', this.productData.id)
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

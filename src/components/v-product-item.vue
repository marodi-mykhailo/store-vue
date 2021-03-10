<template>
    <div class="v-product-item">
        <img class="v-product-item__img"
             :src=productData.image
             alt="product-item"/>
        <div class="v-product-item__content">
            <div class="v-product-item__content-title">{{productData.productName}}</div>
            <div class="v-product-item__content-price">{{productData.price}}</div>
            <p class="v-product-item__content-description">{{productData.description}}</p>
            <button @click="addToCart"
                    class="button v-product-item-btn"
                    :class="{'success-btn': isAddedToCart}"
                    :disabled="isAddedToCart"
            >
                {{ isAddedToCart ? "Added" : "Add to cart"}}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";
    import {ProductItemType} from "@/store/types";

    @Component
    export default class VProductItem extends Vue {
        @Prop() readonly productData!: ProductItemType
        @Prop() readonly isAddedToCart!: boolean


        @Emit()
        addToCart() {
            return this.productData.id
        }


    }
</script>

<style lang="scss">
    .v-product-item {
        display: flex;
        padding: $padding;

        &__img {
            width: 30%;
            height: 400px;
            filter: grayscale(75%);
        }

        &__content {
            width: 60%;
            padding-left: $padding;

            &-title {
                font-size: $large_font_size * 1.5;
                text-transform: uppercase;
                font-weight: bold;
                text-decoration: underline red;
            }

            &-price {
                font-size: $large_font_size;
                padding: 5px 0;
                font-weight: bold;
            }

            &-descriprion {
                width: 80%;
            }
        }

        &-btn {
            width: 80%;
            display: block !important;
            margin: 20px auto 0;
        }

        .success-btn {
            background-color: green;
            width: 40%;
            color: white;
            transition: all .7s;
        }
    }
</style>

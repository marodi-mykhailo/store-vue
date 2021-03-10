<template>
    <div>
        <div class="v-product-item">
            <img class="v-product-item__img"
                 :src=productData.image
                 alt="product-item"
                 @click="toggleImg"
            />
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
        <div v-show="isOpen">
            <img class="v-product-item__img--large"
                 :src=productData.image
                 alt="product-item-large"
                 @click="toggleImg"
            />
            <div class="overlay"
                 :class="{'d-block': isOpen}"
                 @click="toggleImg"
            ></div>

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

        isOpen = false


        @Emit()
        addToCart() {
            return this.productData.id
        }

        toggleImg() {
            if (this.isOpen) {
                this.isOpen = false
            } else {
                this.isOpen = true
            }
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
            cursor: pointer;

            &--large {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                filter: grayscale(75%);
                z-index: 3;
                cursor: pointer;
            }
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
            font-size: 18px;
        }

        .success-btn {
            background-color: green;
            width: 40%;
            color: white;
            transition: all .7s;
        }


    }
</style>

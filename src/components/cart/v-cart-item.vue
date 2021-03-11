<template>
    <div class="v-cart-item">
        <div class="v-cart-item__image-wrapper">
            <img class="v-cart-item__image-img"
                 :src="itemData.image || require('@/assets/images/jeans1.jpg')"
                 alt="cart-image"
            />
        </div>
        <div class="v-cart-item__content">
            <div class="v-cart-item__content-title"
                 @click="toItemPage"
            >{{itemData.productName}}
            </div>
            <p class="v-cart-item__content-description">{{itemData.shortDescription}}</p>
            <div class="v-cart-item__content-price">{{itemData.price}}</div>
            <div class="v-cart-item__quantity">
                <p>Qty: </p>
                <span class="v-cart-item__quantity-tools">
                    <span @click="incrementCount"
                          class="v-cart-item__quantity-btn"><i class="fas fa-plus"></i></span>
                    <span class="v-cart-item__quantity-num">{{itemData.count}}</span>
                    <span @click="decrementCount"
                          v-show="itemData.count > 1"
                          class="v-cart-item__quantity-btn">
                        <i class="fas fa-minus"></i>
                    </span>
                </span>
            </div>
            <div class="v-cart-item__sum-wrapper">
                <p>Sum: </p>
                <span class="v-cart-item__sum-num">${{sum}}</span>
            </div>
        </div>
        <button @click="deleteItemFromCart" class="button v-cart-item__deleteBtn">
            <span class="v-cart-item__deleteBtn-icon">
                <i class="fas fa-trash-alt"></i>
            </span> Delete
        </button>
        <hr/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";
    import {CartItemType} from "@/store/types";
    import {getNumberFromString} from "@/services/getNumberFromString";
    import router from "@/router";

    @Component
    export default class VCartItem extends Vue {
        @Prop() readonly itemData!: CartItemType

        @Emit("incrementCount")
        incrementCount() {
            return this.itemData.id
        }

        @Emit("decrementCount")
        decrementCount() {
            return this.itemData.id
        }

        @Emit("deleteItemFromCart")
        deleteItemFromCart() {
            return this.itemData.id
        }


        toItemPage() {
            router.push({name: 'productItem', params: {productId: this.itemData.id + ""}})
        }

        get sum() {
            return (this.itemData.count * getNumberFromString(this.itemData.price)).toFixed(2)
        }
    }
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        padding: 20px;

        &__image {
            &-wrapper {
                width: 30%;
            }

            &-img {
                width: 100%;
                filter: grayscale(75%);
                height: 250px;

            }
        }

        &__content {
            padding-left: 20px;
            width: 50%;

            &-title {
                font-size: $large_font_size;
                font-weight: bold;
                text-decoration: underline red;
                cursor: pointer;
            }

            &-description {
                font-size: $cart-description_font_size;
                padding-left: $cart-item-content_padding;
                padding-top: $cart-item-content_padding;
                padding-bottom: $cart-item-content_padding;
                line-height: 1.5;
            }

            &-price {
                padding: $cart-item-content_padding;
                font-size: $nav_font_size;
            }
        }

        &__quantity {
            font-size: $cart-description_font_size;
            padding-left: $cart-item-content_padding;
            display: flex;

            &-tools {
                padding-left: $cart-item-content_padding;
                text-align: center;
            }

            &-num {
                font-size: $nav_font_size;
                padding: 0 $cart-item-content_padding;
            }

            &-btn {
                cursor: pointer;

                &:active {
                    color: red;
                }
            }
        }

        &__sum {
            &-wrapper {
                display: flex;
                padding: $cart-item-content_padding;
                font-size: $cart-description_font_size;
                align-items: center;
            }

            &-num {
                padding-left: $cart-item-content_padding;
                color: green;
                font-size: $nav_font_size;
            }
        }

        &__deleteBtn {
            width: 15%;
            padding: $cart-item-content_padding;
            margin: 0 10px;
            text-align: center;
            font-size: $nav_font_size;
        }
    }

</style>

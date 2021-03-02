<template>
    <div class="v-products">
        <div class="v-products__top">
            <p class="v-products__top-count">8 items</p>
        </div>
        <div class="v-products__list">
            <template v-for="item in cardInfo"
                      :key="item.id">
                <v-product-card :product-data="item"
                                @add-to-cart="this.addToCart"
                                :isAddedToCart="this.isAddedToCart(item.id)"
                />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import vProductCard from './v-product-card.vue'
    import {mapActions, mapGetters} from 'vuex'
    import {Options, Vue} from "vue-class-component";
    import {GetDataForCardType} from "@/store/modules/product";
    import {CartProductType} from "@/store/types";

    @Options({
        name: "v-products",
        components: {
            vProductCard
        },
        computed: {
            ...mapGetters('product', {
                cardInfo: 'getDataForCard'
            }),
            ...mapGetters('cart', {
                cartData: 'getCartData'
            }),

        },
        methods: {
            ...mapActions('cart', [
                'setToCart'
            ]),
            addToCart(id: number) {
                this.setToCart(id)
            },

        }
    })
    export default class VProducts extends Vue {
        cardInfo!: GetDataForCardType[]
        cartData!: CartProductType[]

        data() {
            return {}
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

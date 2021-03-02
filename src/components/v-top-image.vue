<template>
    <div class="v-top-image">
        <img class="v-top-image__img" src="../assets/images/jeans.jpg" alt="Jeans"/>
        <div class="v-top-image__textBox">
            <h1 class="v-top-image__textBox-title">New arrivals</h1>
            <h1 class="v-top-image__textBox-subTitle">COLLECTION 2016</h1>
            <a class="button v-top-image__btn" href="#jeans">SHOP NOW</a>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'v-top-image'
    })
</script>

<style lang="scss">
    .v-top-image {
        padding: 0 $padding;
        position: relative;

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

        &__img {
            width: 100%;
            vertical-align: middle;
            border-style: none;
        }

        &__textBox {
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            padding: $padding_large $padding_large*2;

            &-title {
                font-size: $top_img_title_font_size;
                margin: 10px 0;
            }

            &-subTitle {
                margin: 10px 0;
            }
        }

        &__btn {
            color: #fff;
            background-color: $black !important;
            padding: $padding_large*0.5 $padding_large !important;
            margin: 15px 0;

            &:hover {
                color: $black;
                background-color: #ccc !important;
            }
        }
    }
</style>

<template>
    <nav class="v-side-bar">
        <div class="v-side-bar__logo">
            <h3 class="v-side-bar__logo-text">
                <b>LOGO</b>
            </h3>
        </div>
        <div class="v-side-bar__list">
            <a class="v-side-bar__list-link" href="#">Shirts</a>
            <a class="v-side-bar__list-link" href="#">Dresses</a>
            <a class="v-side-bar__list-link v-side-bar__dropdown-switch" href="#">Jeans <i
                    class="fa fa-caret-down"/></a>
            <div class="v-side-bar__dropdown-box">
                <a class="v-side-bar__list-link" href="#">
                    <i class="fa fa-caret-right v-side-bar__dropdown-icon"/> Skinny</a>
                <a class="v-side-bar__list-link" href="#">
                    <i class="fa fa-caret-right v-side-bar__dropdown-icon"/> Relaxed</a>
                <a class="v-side-bar__list-link" href="#">
                    <i class="fa fa-caret-right v-side-bar__dropdown-icon"/> Bootcut</a>
                <a class="v-side-bar__list-link" href="#">
                    <i class="fa fa-caret-right v-side-bar__dropdown-icon"/> Straight</a>
            </div>
            <a class="v-side-bar__list-link" href="#">Jackets</a>
            <a class="v-side-bar__list-link" href="#">Gymwear</a>
            <a class="v-side-bar__list-link" href="#">Blazers</a>
            <a class="v-side-bar__list-link" href="#">Shoes</a>
        </div>
        <a class="v-side-bar__list-link color-black" href="#">Contact</a>
        <a class="v-side-bar__list-link color-black" href="#">Newsletter</a>
        <a class="v-side-bar__list-link color-black" href="#">Subscribe</a>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "v-side-bar"
    }
</script>

<style lang="scss">
    .v-side-bar {
        width: 250px;
        height: 100%;
        position: fixed;
        top: 0;
        overflow: auto;

        &__logo {
            padding: $padding;

            &-text {
                letter-spacing: 4px;
                font-size: $logo_font_size;
                margin: 10px 0;

            }
        }

        &__list {
            font-weight: bold;
            color: $nav_grey;
            padding-top: $padding*4;
            padding-bottom: $padding*4;
            font-size: $nav_font_size;

            &-link {
                width: 100%;
                display: block;
                padding: $padding*0.5 $padding;
                text-align: left;
                border: none;
                white-space: normal;
                float: none;
                outline: 0;
                font-family: "Roboto", sans-serif;
                cursor: pointer;
                color: inherit;

                &:hover {
                    color: $black;
                    background-color: $nav_item_bg_color;
                    transition: all .5s;


                    .v-side-bar__dropdown-icon {
                        display: inline;
                    }
                }

            }
        }

        &__dropdown {
            &-switch {
                color: $black;
            }

            &-box {
                padding: 12px 24px;
                font-size: $nav_dropdown_font_size;
            }

            &-icon {
                display: none;
                margin-right: $margin;
            }
        }

    }
</style>

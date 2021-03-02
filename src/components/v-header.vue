<template>
    <header class="v-header contentLeftMargin">
        <p class="v-header__left">Jeans</p>
        <p class="v-header__right">
            <i class="fa fa-shopping-cart margin-right"/>
            <i class="fa fa-search"/>
        </p>
    </header>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "v-header"
    })
</script>

<style lang="scss">
    .v-header {
        font-size: $large_font_size;
        padding: 0 $padding;

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

        &__left {
            float: left;
            margin: $large_margin 0;
        }

        &__right {
            float: right;
            margin: $large_margin 0;
            cursor: pointer;
        }
    }
</style>

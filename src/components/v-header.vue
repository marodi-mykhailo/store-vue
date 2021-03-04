<template>
    <header class="v-header contentLeftMargin">
        <p class="v-header__left">Jeans</p>
        <p class="v-header__right">
            <router-link to="cart"><i class="fa fa-shopping-cart margin-right"/></router-link>
            <i class="fa fa-search"/>
        </p>
    </header>
</template>

<script lang="ts">


    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "v-header"

    })
    export default class VHeader extends Vue {

    }
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

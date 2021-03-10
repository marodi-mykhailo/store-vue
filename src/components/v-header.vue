<template>
    <header class="v-header contentLeftMargin">
        <p class="v-header__left">Jeans</p>
        <div class="v-header__right">
            <i class="fa fa-shopping-cart margin-right"
               @click="toCart"/>
            <i class="fa fa-search"/>
        </div>
    </header>
</template>

<script lang="ts">


    import {Vue, Component} from "vue-property-decorator";
    import router from "@/router";

    @Component({
        name: "v-header"

    })
    export default class VHeader extends Vue {

        get title() {
            return this.$route.path.replace("/", "")
        }

        toCart() {
            router.push({path: '/cart'})
        }


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

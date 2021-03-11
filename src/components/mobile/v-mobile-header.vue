<template>
    <div class="v-mobile-header">
        <div class="v-side-bar__logo">
            <h3 class="v-side-bar__logo-text white">
                <b>
                    <router-link to="/main">LOGO</router-link>
                </b>
            </h3>
        </div>
        <div class="v-mobile-header__bars white">
            <i class="fa fa-bars"
               @click="openSideBar"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Action} from "vuex-class";

    @Component
    export default class VMobileHeader extends Vue {
        @Action("sideBar/openSideBar") openSideBar!: () => void

    }
</script>

<style lang="scss">
    .v-mobile-header {
        display: none;
        height: 84px;
        background-color: $mobile-header_bg_color;
        width: 100%;
        position: relative;

        &__bars {
            position: absolute;
            right: 0;
            top: 0;
            font-size: $large_font_size;
            padding: $padding_large $padding;
        }
    }

    .white {
        color: white;
    }
</style>

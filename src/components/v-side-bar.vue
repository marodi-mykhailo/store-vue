<template>
    <div>
        <nav class="v-side-bar"
             :class="{'d-block': isOpen}">
            <div class="v-side-bar__logo">
                <h3 class="v-side-bar__logo-text">
                    <b>
                        <router-link to="/main">LOGO</router-link>
                    </b>
                </h3>
                <i class="fas fa-times v-side-bar__closeIcon"
                   @click="closeSideBar"
                   v-show="isOpen"
                ></i>
            </div>
            <div class="v-side-bar__list">
                <router-link class="v-side-bar__list-link" to="/Shirts">Shirts</router-link>
                <router-link class="v-side-bar__list-link" to="/Dresses">Dresses</router-link>
                <a @click="toggleDropdown" class="v-side-bar__list-link v-side-bar__dropdown-switch" href="#">Jeans <i
                        class="fa fa-caret-down"/></a>
                <div v-if="dropdownIsVisible" class="v-side-bar__dropdown-box">
                    <router-link class="v-side-bar__list-link" to="/Skinny">
                        <i class="fa fa-caret-right v-side-bar__dropdown-icon margin-right"/> Skinny
                    </router-link>
                    <router-link class="v-side-bar__list-link" to="/Relaxed">
                        <i class="fa fa-caret-right v-side-bar__dropdown-icon margin-right"/> Relaxed
                    </router-link>
                    <router-link class="v-side-bar__list-link" to="/Bootcut">
                        <i class="fa fa-caret-right v-side-bar__dropdown-icon margin-right"/> Bootcut
                    </router-link>
                    <router-link class="v-side-bar__list-link" to="/Straight">
                        <i class="fa fa-caret-right v-side-bar__dropdown-icon margin-right"/> Straight
                    </router-link>
                </div>
                <router-link class="v-side-bar__list-link" to="Jackets">Jackets</router-link>
                <router-link class="v-side-bar__list-link" to="Gymwear">Gymwear</router-link>
                <router-link class="v-side-bar__list-link" to="Blazers">Blazers</router-link>
                <router-link class="v-side-bar__list-link" to="Shoes">Shoes</router-link>
            </div>
            <router-link class="v-side-bar__list-link color-black" to="/Contact">Contact</router-link>
            <router-link class="v-side-bar__list-link color-black" to="/Newsletter">Newsletter</router-link>
            <router-link class="v-side-bar__list-link color-black" to="/Subscribe">Subscribe</router-link>
        </nav>
        <div class="overlay"
             :class="{'d-block': isOpen}"
             @click="closeSideBar"
        ></div>
    </div>
</template>

<script lang="ts">

    import {Vue, Component} from "vue-property-decorator";
    import {Action, Getter} from "vuex-class";

    @Component({
        name: 'v-side-bar',
    })
    export default class VSideBar extends Vue {
        @Getter("sideBar/getSideBarStatus") isOpen!: boolean
        @Action("sideBar/closeSideBar") closeSideBar!: () => void
        dropdownIsVisible = false

        toggleDropdown() {
            this.dropdownIsVisible = !this.dropdownIsVisible
        }
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
            }
        }

        &__closeIcon {
            position: absolute;
            top: 0;
            right: 0;
            padding: $padding*0.5 $padding;
        }
    }

    .overlay {
        position: fixed;
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
</style>

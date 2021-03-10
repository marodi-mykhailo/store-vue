<template>
    <div class="container" id="app">
        <v-mobile-header></v-mobile-header>
        <v-header></v-header>
        <v-side-bar></v-side-bar>
        <v-modal v-show="isModalStatus"></v-modal>

        <div class="contentLeftMargin">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <v-subscribe></v-subscribe>
            <v-footer></v-footer>
            <div class="caption">
                Powered by
                <a class="hover-opacity"
                   href="https://www.w3schools.com/w3css/default.asp"
                   title="W3.CSS"
                   target="_blank">w3.css</a>
            </div>

        </div>


        <!--        <router-view v-slot="{ Component }">-->
        <!--            <component :is="Component" @event-test="$emit('new-test-event')"/>-->
        <!--        </router-view>-->
    </div>
</template>

<script lang="ts">
    import VSideBar from './components/v-side-bar.vue'
    import vHeader from "@/components/v-header.vue";
    import {Vue, Component} from "vue-property-decorator";
    import {Action, Getter} from "vuex-class";
    import VMobileHeader from "@/components/v-mobile-header.vue";
    import VSubscribe from "@/components/v-subscribe.vue";
    import VFooter from "@/components/v-footer.vue";
    import VModal from "@/components/v-modal.vue";

    @Component({
        components: {
            VModal,
            VFooter,
            VSubscribe,
            VMobileHeader,
            VSideBar,
            vHeader,
        }
    })
    export default class App extends Vue {
        @Action("product/fetchProducts") fetchProducts!: () => void
        @Action("app/setDesktop") setDesktop!: () => void
        @Action("app/setMobile") setMobile!: () => void
        @Getter("app/getModalStatus") isModalStatus!: boolean

        mounted() {
            const setDesktop = this.setDesktop;
            const setMobile = this.setMobile;
            this.fetchProducts()
            window.addEventListener('resize', function () {
                if (window.innerWidth > 992) {
                    setDesktop()
                } else {
                    setMobile()
                }
            })
            // @ts-ignore
            window.store = this.$store.state
        }


    }


    // todo:пофіксити сіде бар,
    // todo:поправити струкртуру
    // todo: добавити пагінацію
</script>

<style lang="scss">
    #app {
        color: #2c3e50;
    }

    .caption {
        color: white;
        background-color: #000;
        padding: $padding_large 0;
        text-align: center;

        a {
            text-decoration: underline;
        }
    }

</style>



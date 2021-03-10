<template>
    <div class="v-modal">
        <div class="v-modal__inner">
            <div class="v-modal__inner__content">
                <i class="fas fa-times v-modal__closeIcon"
                   @click="toggleModal"></i>
                <h2 class="v-modal-title">NEWSLETTER</h2>
                <p class="v-modal-description p-margin">
                    Join our mailing list to receive updates on new arrivals and special offers.
                </p>
                <p class="p-margin">
                    <input class="input" type="text" placeholder="Enter e-mail">
                </p>
                <button class="button v-subscribe__btn v-modal-btn"
                        @click="toggleModal"
                        type="button">Subscribe
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Action} from "vuex-class";

    @Component
    export default class VModal extends Vue {
        @Action("app/toggleModal") toggleModal!: () => void

    }
</script>

<style lang="scss">
    .v-modal {
        z-index: 3;
        padding-top: 100px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);

        &__inner {
            padding: $padding*2;
            position: relative;
            width: 900px;
            margin: auto;
            text-align: center;
            background-color: white;
            animation: zoomIn .6s;

            &__content {
                padding: 0 $padding;

            }
        }

        &-title {
            letter-spacing: 4px;
        }

        &__closeIcon {
            float: right;
            padding: $padding/2 $padding;
            font-size: $large_font_size*1.5;
            cursor: pointer;
        }

        &-btn {
            padding: $padding_large/2 $padding_large !important;
        }

    }


</style>

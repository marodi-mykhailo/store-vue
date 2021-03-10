<template>
    <div class="v-subscribe">
        <h1 class="v-subscribe__title">Subscribe</h1>
        <p class="v-subscribe__description p-margin">To get special offers and VIP treatment:</p>
        <p class="p-margin">
            <input class="v-subscribe__input input" type="text" placeholder="Enter e-mail">
        </p>
        <button class="button v-subscribe__btn" type="submit">Subscribe</button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class VSubscribe extends Vue {

    }
</script>

<style lang="scss">
    .v-subscribe {
        color: white;
        background-color: black;
        padding: $padding*2 $padding;

        &__title {
            font-size: $large_font_size*1.5;
        }

        &__description {
            font-size: $large_font_size/2;
        }

        &__btn {
            background-color: red !important;
            font-size: 15px !important;
            margin-bottom: $margin;
            color: white;
        }
    }
</style>

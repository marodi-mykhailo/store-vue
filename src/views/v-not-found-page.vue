<template>
    <div class="v-not-found">
        <h1 class="v-not-found__title">
            404 Page is not found
        </h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class VNotFoundPage extends Vue {

    }
</script>

<style lang="scss">
    .v-not-found {
        padding: $padding_large*2 0;

        &__title {
            text-align: center;
        }
    }
</style>

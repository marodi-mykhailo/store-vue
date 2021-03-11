<template>
    <div class="v-product-item-page">
        <v-product-item-container></v-product-item-container>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import VProductItemContainer from "../components/product/v-product-item-container.vue";

    @Component({
        components: {
            VProductItemContainer
        }
    })
    export default class VProductItemPage extends Vue {

    }
</script>

<style lang="scss">
.v-product-item-page{
    margin-bottom: 60px;
}
</style>

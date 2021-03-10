<template>
    <div class="v-product-item">
        <img class="v-product-item__img" :src="itemData.image || require('@/assets/images/jeans1.jpg')" alt="product-item"/>
        <div class="v-product-item__content">
            <div class="v-product-item__content-title">title</div>
            <div class="v-product-item__content-price">Price</div>
            <p class="v-product-item__content-description">Description</p>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">

</style>

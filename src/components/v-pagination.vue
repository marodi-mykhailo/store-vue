<template>
    <div class="v-pagination">
        <button class="v-pagination__btn"><i class="fas fa-arrow-circle-left"
                                             @click="toPrevPage"></i></button>
        <p class="v-pagination__page">{{page}} from {{pagesCount}}</p>
        <button class="v-pagination__btn"><i class="fas fa-arrow-circle-right"
                                             @click="toNextPage"></i></button>
    </div>
</template>

<script lang="ts">

    import {Vue, Component, Prop, Emit, Watch} from "vue-property-decorator";
    import {ProductDataType} from "@/store/types";

    @Component
    export default class VPagination extends Vue {
        @Prop() data!: ProductDataType[]
        @Prop() itemPerPage!: number

        @Emit('getList')
        getList() {
            const from = (this.page - 1) * this.itemPerPage
            const to = from + this.itemPerPage
            return this.data.slice(from, to)
        }

        @Watch('data')
        onChanged() {
            this.getList()
        }

        page = 1

        get pagesCount() {
            return Math.ceil(this.data.length / this.itemPerPage)
        }

        toNextPage() {
            if (this.pagesCount <= this.page) {
                return;
            } else {
                this.page++
                this.getList()
            }
        }

        toPrevPage() {
            if (this.page <= 1) {
                return;
            } else {
                this.page--
                this.getList()
            }
        }
    }
</script>

<style lang="scss">
    .v-pagination {
        display: flex;
        width: max-content;
        align-items: center;

        &__btn {
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            font-size: 16px;

            &:hover {
                color: black;
            }

            &:active {
                color: red;
            }
        }

        &__page {
            padding: 0 $padding;
        }
    }

</style>

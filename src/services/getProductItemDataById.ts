import {ProductStoreType} from "@/store/modules/product";

export const getProductItemDataById = (state: ProductStoreType, productId: number) => {
    const product = state.products.find(item => item.id === productId)
    if (product) {
        return {
            id: product.id,
            productName: product.product_name,
            price: product.price,
            description: product.description,
            image: product.image
        }
    } else {
        return {
            id: 2,
            productName: "misha",
            price: "200",
            description: "adadadada",
            image: "dasasdasd"
        }
    }
}

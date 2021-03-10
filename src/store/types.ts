export interface RootStateType {
}

export interface CartProductType {
    id: number
    count: number
}

export interface ProductType {
    id: number
    product_name: string
    short_description: string
    description: string
    image: string
    price: string
    company: string
}

export interface ProductDataType {
    id: number,
    productName: string
    price: string
    image: string
}

export interface ProductItemType extends ProductDataType {
    description: string
}

export interface ProductDataForCartType extends ProductDataType {
    shortDescription: string
}

export interface CartItemType extends ProductDataForCartType {
    count: number
}

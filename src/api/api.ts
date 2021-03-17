import axios from "axios";
import {ProductType} from "@/store/types";

const settings = {
    header: {
        "Access-Control-Allow-Origin": "*"
    }
}

const instance = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
    ...settings
})

export interface StoreApiResponseType {
    data: ProductType[]
}


export const storeAPI = {
    getProducts() {
        return instance.get<StoreApiResponseType>('5ab0d1882e0000e60ae8b7a6')
    }
}

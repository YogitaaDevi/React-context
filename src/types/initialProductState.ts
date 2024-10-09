import { ProductType } from "./ProductType";

export interface InitialProductState{
    product: ProductType[],
    cart: ProductType[]
    order: ProductType[],
    cost: number,
    costWithGst: number,
    isPayment: boolean,
    isOrder: boolean
}
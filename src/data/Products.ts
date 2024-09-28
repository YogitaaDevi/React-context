import { ProductType } from "../types/ProductType";
import briyani from "../assets/images/briyani.jpg"
import juice from "../assets/images/lemon-juice.webp"
import chicken from "../assets/images/korean-chicken.webp"
import sweet from "../assets/images/bread-halwa.webp"

const products: ProductType[] = [
    { id: 1, image: briyani, name: "Mutton Briyani", price: 250, count: 0 },
    { id: 2, image: juice, name: "Mint Lemon", price: 80, count:0 },
    { id: 3, image: chicken, name: "Korean Chicken", price: 200, count:0 },
    { id: 4, image: sweet, name: "Bread halwa", price: 160, count:0 }
]

export default products
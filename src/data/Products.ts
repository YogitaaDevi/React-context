import { ProductType } from "../types/ProductType";
import briyani1 from "../assets/images/briyani.webp"
import juice from "../assets/images/lime.jpg"
import chicken from "../assets/images/chicken-65.jpg"
import briyani2 from "../assets/images/briyani1.webp"
import idly from "../assets/images/idly.jpg"
import poori from "../assets/images/poori.jpg"
import dosa from "../assets/images/dosa.jfif"
import pongal from "../assets/images/pongal.jpg"

const products: ProductType[] = [
    { id: 1, image: idly, name: "Idly with Chutney", price: 60, count:0 },
    { id: 2, image: poori, name: "Poori Kezhangu", price: 80, count:0 },
    { id: 3, image: dosa, name: "Dosa with Sambar", price: 100, count:0 },
    { id: 4, image: pongal, name: "Ghee Pongal", price: 60, count:0 },
    { id: 5, image: briyani1, name: "Mutton Briyani", price: 280, count: 0 },
    { id: 6, image: briyani2, name: "Chicken Briyani", price: 250, count:0 },
    { id: 7, image: chicken, name: "Chicken 65", price: 150, count:0 },
    { id: 8, image: juice, name: "Lemon Juice", price: 60, count:0 }

]

export default products
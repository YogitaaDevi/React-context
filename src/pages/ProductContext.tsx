import { createContext, useState } from "react"
import { ProductType } from "../types/ProductType";
import products from "../data/Products";

interface ProductContextProps {
    children: any
}

const ProductContextValue = {
    count: 0,
    product: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
    handleIncrement: (product: ProductType) => { },
    handleDecrement: (product: ProductType) => { }
}

export const ProductContextProvider = createContext(ProductContextValue);

const ProductContext = ({ children }: ProductContextProps) => {
    const [product, setProduct] = useState<ProductType[]>(products)
    const [count, setCount] = useState<number>(0);
    let productFilter;
    const findProduct = (id: number) => {
        return products.find((data) => data.id === id)
    }
    const handleIncrement = (product: ProductType) => {
        productFilter = findProduct(product.id)
        if (productFilter) {
            productFilter.count += 1
            setCount((prev: number) => prev + 1)
        }
    }
    const handleDecrement = (product: ProductType) => {
        productFilter = findProduct(product.id)
        if (productFilter && productFilter.count > 0) {
            productFilter.count -= 1
            setCount((prev: number) => prev - 1)
        }
    }
    return (
        <ProductContextProvider.Provider value={{ count, handleIncrement, handleDecrement, product }}>
            {children}
        </ProductContextProvider.Provider>
    )
}

export default ProductContext

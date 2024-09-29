import { createContext, useState } from "react"
import { ProductType } from "../types/ProductType";
import products from "../data/Products";

interface ProductContextProps {
  children: any
}

const ProductContextValue = {
  count: 0,
  product: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
  cart: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
  handleIncrement: (product: ProductType) => { },
  handleDecrement: (product: ProductType) => { }
}

export const ProductContextProvider = createContext(ProductContextValue);

const ProductContext = ({ children }: ProductContextProps) => {
  const [product, setProduct] = useState<ProductType[]>(products)
  const [cart, setCart] = useState<ProductType[]>([])
  const [count, setCount] = useState<number>(0);
  let productFilter: any;
  let cartProduct: any;

  const findProduct = (id: number) => {
    return products.find((data) => data.id === id)
  }

  const findCartProduct = (cart: ProductType[]) => {
    return cart.find((data) => data.id === productFilter.id)
  }

  const handleIncrement = (product: ProductType) => {
    productFilter = findProduct(product.id)
    if (productFilter) {
      productFilter.count += 1
      setCount((prev: number) => prev + 1)
      cartProduct = findCartProduct(cart)
      if (!cartProduct) {
        setCart((prev: any) => [...prev, productFilter])
      }
    }
  }
  const handleDecrement = (product: ProductType) => {
    productFilter = findProduct(product.id)
    if (productFilter && productFilter.count > 0) {
      productFilter.count -= 1
      setCount((prev: number) => prev - 1)
      cartProduct = findCartProduct(cart)
      if (cartProduct && productFilter.count === 0) {
        setCart((prev) => prev.filter((item) => item.id !== product.id))
      }
    }
  }
  console.log(cart)
  return (
    <ProductContextProvider.Provider value={{ count, handleIncrement, handleDecrement, product, cart }}>
      {children}
    </ProductContextProvider.Provider>
  )
}

export default ProductContext

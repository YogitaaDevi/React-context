import { createContext, useEffect, useState } from "react"
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
  handleDecrement: (product: ProductType) => { },
  totalCost: 0
}

export const ProductContextProvider = createContext(ProductContextValue);

const ProductContext = ({ children }: ProductContextProps) => {

  const [product, setProduct] = useState<ProductType[]>(products)
  const [cart, setCart] = useState<ProductType[]>([])
  const [count, setCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0)
  let productFilter: any;
  let cartProduct: any;

  const handleTotalCount = (itemCost: number) => {
    setTotalCost((prevTotal) => prevTotal + itemCost);
  };

  useEffect(() => {
    setTotalCost(0);
    cart.forEach(item => {
      handleTotalCount(item.price * item.count);
    });
  });

  const findProduct = (id: number) => {
    return products.find((data) => data.id === id)
  }

  const findCartProduct = (cart: ProductType[]) => {
    return cart.find((data) => data.id === productFilter.id)
  }

  const handleProduct = (product: ProductType) => {
    setProduct((prev: ProductType[]) => prev.map((data) => data.id === product.id ? product : data ) )
  }

  const handleIncrement = (product: ProductType) => {
    productFilter = findProduct(product.id)
    if (productFilter) {
      productFilter.count += 1
      handleProduct(productFilter)
      cartProduct = findCartProduct(cart)
      if (!cartProduct) {
        setCount((prev: number) => prev + 1)
        setCart((prev: any) => [...prev, productFilter])
      }
    }
  }
  const handleDecrement = (product: ProductType) => {
    productFilter = findProduct(product.id)
    if (productFilter && productFilter.count > 0) {
      productFilter.count -= 1
      handleProduct(productFilter)
      cartProduct = findCartProduct(cart)
      if (cartProduct && productFilter.count === 0) {
        setCount((prev: number) => prev - 1)
        setCart((prev) => prev.filter((item) => item.id !== product.id))
      }
    }
  }
  return (
    <ProductContextProvider.Provider value={{ count, handleIncrement, handleDecrement, product, cart, totalCost }}>
      {children}
    </ProductContextProvider.Provider>
  )
}

export default ProductContext

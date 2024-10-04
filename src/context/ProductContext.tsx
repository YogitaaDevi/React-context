import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ProductType } from "../types/ProductType";
import products from "../data/Products";

interface ProductContextProps {
  children: ReactNode;
}

const ProductContextValue = {
  count: 0,
  product: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }],
  cart: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }],
  order: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }],
  handleIncrement: (product: ProductType) => { },
  handleDecrement: (product: ProductType) => { },
  totalCost: 0,
  totalCostWithGst: 0,
  showOrderButton: () => { },
  hideOrderButton: () => { },
  isOrder: false,
  paymentSuccess: () => { },
  isPayment: false,
};

export const ProductContextProvider = createContext(ProductContextValue);

const ProductContext = ({ children }: ProductContextProps) => {
  const [product, setProduct] = useState<ProductType[]>(products);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [order, setOrder] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalCostWithGst, setTotalCostWithGst] = useState<number>(0);
  const [isOrder, setIsOrder] = useState<boolean>(false);
  const [isPayment, setIsPayment] = useState<boolean>(false);

  const findCartProduct = (cart: ProductType[], product: ProductType) => {
    return cart.find((data) => data.id === product.id);
  };

  const showOrderButton = useCallback(() => {
    setIsOrder(true);
  }, []);

  const hideOrderButton = useCallback(() => {
    setIsOrder(false);
  }, []);

  const paymentSuccess = useCallback(() => {
    setIsPayment((prev: boolean) => !prev);
    setCount(0);
    setOrder(cart)
    setCart([])
    setProduct((prev: any) => prev.map((item: ProductType) => ({ ...item, count: 0 })));
  }, [cart]);

  const handleProduct = useCallback((product: ProductType) => {
    setProduct((prev: ProductType[]) =>
      prev.map((data) => (data.id === product.id ? product : data))
    );
  }, []);

  const handleIncrement = useCallback((product: ProductType) => {
    product.count += 1;
    handleProduct(product);
    if (!findCartProduct(cart, product)) {
      setCount((prev: number) => prev + 1);
      setCart((prev: ProductType[]) => [...prev, product]);
    }
  }, [product]);

  const handleDecrement = useCallback((product: ProductType) => {
    if (product && product.count > 0) {
      product.count -= 1;
      handleProduct(product);
      if (product.count === 0) {
        setCount((prev: number) => prev - 1);
        setCart((prev: ProductType[]) => prev.filter((item) => item.id !== product.id));
      }
    }
  }, [product]);

  const handleTotalCount = (itemCost: number, itemGst: number) => {
    setTotalCost((prev) => prev + itemCost);
    setTotalCostWithGst((prev) => prev + itemCost + itemGst);
  };

  useEffect(() => {
    setTotalCost(0);
    setTotalCostWithGst(0);
    if (cart.length !== 0) {
      cart.forEach((item) => {
        const itemTotalCost = item.price * item.count;
        const itemGst = itemTotalCost * 0.18;
        handleTotalCount(itemTotalCost, itemGst);
      });
    }
    else {
      order.forEach((item) => {
        const itemGst = (item.price * item.count) * 0.18;
        const itemTotalCost = item.price * item.count;
        handleTotalCount(itemTotalCost, itemGst);
      });
    }
  }, [cart, handleTotalCount, order]);

  const contextValue = useMemo(() =>
  ({
    count, handleIncrement, handleDecrement, product, cart, totalCost, totalCostWithGst, hideOrderButton, showOrderButton, isOrder, paymentSuccess, isPayment, order
  }),
    [
      count, handleIncrement, handleDecrement, product, cart, totalCost, totalCostWithGst, hideOrderButton, showOrderButton, isOrder, paymentSuccess, isPayment, order
    ]);

  return (
    <ProductContextProvider.Provider value={contextValue}>
      {children}
    </ProductContextProvider.Provider>
  );
};

export default ProductContext;

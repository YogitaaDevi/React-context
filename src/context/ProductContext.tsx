import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ProductType } from "../types/ProductType";
import products from "../data/Products";

interface ProductContextProps {
  children: any;
}

const ProductContextValue = {
  count: 0,
  product: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
  cart: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
  order: [{ id: 0, name: "", price: 0, image: "", count: 0 }],
  handleIncrement: (product: ProductType) => { },
  handleDecrement: (product: ProductType) => { },
  totalCost: 0,
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
  const [isOrder, setIsOrder] = useState<boolean>(false);
  const [isPayment, setIsPayment] = useState<boolean>(false);

  let productFilter: any;
  let cartProduct: any;

  const findProduct = (id: number) => {
    return products.find((data) => data.id === id);
  };

  const findCartProduct = (cart: ProductType[]) => {
    return cart.find((data) => data.id === productFilter.id);
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
    productFilter = findProduct(product.id);
    if (productFilter) {
      productFilter.count += 1;
      handleProduct(productFilter);
      cartProduct = findCartProduct(cart);
      if (!cartProduct) {
        setCount((prev: number) => prev + 1);
        setCart((prev: ProductType[]) => [...prev, productFilter]);
      }
    }
  }, [cart]);

  const handleDecrement = useCallback((product: ProductType) => {
    productFilter = findProduct(product.id);
    if (productFilter && productFilter.count > 0) {
      productFilter.count -= 1;
      handleProduct(productFilter);
      cartProduct = findCartProduct(cart);
      if (cartProduct && productFilter.count === 0) {
        setCount((prev: number) => prev - 1);
        setCart((prev: ProductType[]) => prev.filter((item) => item.id !== product.id));
      }
    }
  }, [cart, handleProduct]);

  const handleTotalCount = (itemCost: number, itemGst: number) => {
    setTotalCost((prevTotal) => prevTotal + itemCost + itemGst);
  };

  useEffect(() => {
    setTotalCost(0);
    if (cart.length !== 0) {
      cart.forEach((item) => {
        const itemGst = (item.price * item.count) * 0.18;
        const itemTotalCost = item.price * item.count;
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
  }, [cart, handleTotalCount, productFilter, order]);

  const contextValue = useMemo(() =>
  ({
    count, handleIncrement, handleDecrement, product, cart, totalCost, hideOrderButton, showOrderButton, isOrder, paymentSuccess, isPayment, order
  }),
    [
      count, handleIncrement, handleDecrement, product, cart, totalCost, hideOrderButton, showOrderButton, isOrder, paymentSuccess, isPayment, order
    ]);

  return (
    <ProductContextProvider.Provider value={contextValue}>
      {children}
    </ProductContextProvider.Provider>
  );
};

export default ProductContext;

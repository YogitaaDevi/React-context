import { createContext, ReactNode, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { ProductType } from "../types/ProductType";
import products from "../data/Products";
import { productAction } from "../enum/action";
import { InitialProductState } from "../types/initialProductState";

interface ProductContextProps {
  children: ReactNode;
}

export interface ActionType {
  type: productAction,
  payload?: ProductType[] | ProductType
}

const initialState: InitialProductState = {
  product: products,
  cart: [],
  order: [],
  cost: 0,
  costWithGst: 0,
  isPayment: false,
  isOrder: false
}

const productReducer = (state: InitialProductState, action: ActionType): InitialProductState => {
  switch (action.type) {
    case productAction.SEARCH_DATA: {
      return { ...state, product: action.payload as ProductType[] }
    }
    case productAction.DISPLAY_DATA: {
      return { ...state, product: products }
    }
    case productAction.SHOW_CART: {
      return { ...state, isOrder: true }
    }
    case productAction.SHOW_ORDER: {
      return { ...state, isOrder: false }
    }
    case productAction.ADD_TO_CART: {
      const addToCart = action.payload as ProductType
      const updatedProduct = state.product.map((prev: ProductType) => prev.id === addToCart.id ? { ...prev, count: prev.count + 1, quantity: prev.quantity - 1 } : prev);
      const inCart = state.cart.find((item: ProductType) => item.id === addToCart.id);
      const updatedCart = inCart ? state.cart.map((prev: ProductType) =>
        prev.id === addToCart.id
          ? { ...prev, count: prev.count + 1 }
          : prev
      )
        : [...state.cart, { ...addToCart, count: 1 }];
      return { ...state, product: updatedProduct as ProductType[], cart: updatedCart as ProductType[] };
    }
    case productAction.REMOVE_FROM_CART: {
      const removeFromCart = action.payload as ProductType
      const updatedProduct = state.product.map((prev: ProductType) => prev.id === removeFromCart.id ? { ...prev, count: prev.count - 1, quantity: prev.quantity + 1 } : prev);
      const updatedCart = removeFromCart.count - 1 === 0 ?
        state.cart.filter((prev: ProductType) => prev.id !== removeFromCart.id) : state.cart.map((prev: ProductType) => prev.id === removeFromCart.id ? { ...prev, count: prev.count - 1 } : prev)
      return { ...state, product: updatedProduct as ProductType[], cart: updatedCart as ProductType[] }
    }
    case productAction.TOTAL_CART_COST: {
      const { total, totalWithGst } = state.cart.reduce(
        (acc, item) => {
          const itemTotalCost = item.price * item.count;
          const itemGst = itemTotalCost * 0.18;
          acc.total += itemTotalCost;
          acc.totalWithGst += itemTotalCost + itemGst;
          return acc;
        },
        { total: 0, totalWithGst: 0 })
      return { ...state, cost: total, costWithGst: totalWithGst }
    }
    case productAction.TOTAL_ORDER_COST: {
      const { total, totalWithGst } = state.order.reduce(
        (acc, item) => {
          const itemTotalCost = item.price * item.count;
          const itemGst = itemTotalCost * 0.18;
          acc.total += itemTotalCost;
          acc.totalWithGst += itemTotalCost + itemGst;
          return acc;
        },
        { total: 0, totalWithGst: 0 })
      return { ...state, cost: total, costWithGst: totalWithGst }
    }
    case productAction.RESET_TOTAL_COST: {
      return { ...state, cost: 0, costWithGst: 0 }
    }
    case productAction.PAYMENT: {
      return { ...state, isPayment: true, order: state.cart, cart: [], product: state.product.map((item) => ({ ...item, count: 0 })) }
    }
    default:
      return state
  }
}

const ProductContextValue = {
  currentState: { product: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }], cart: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }], order: [{ id: 0, name: "", price: 0, image: "", count: 0, quantity: 0 }], cost: 0, costWithGst: 0, isPayment: false, isOrder: false },
  dispatch: (value: ActionType) => { },
};

export const ProductContextProvider = createContext(ProductContextValue);

const ProductContext = ({ children }: ProductContextProps) => {
  const [currentState, dispatch] = useReducer(productReducer, initialState)
  console.log(currentState.order);

  useEffect(() => {
    dispatch({ type: productAction.RESET_TOTAL_COST })
    if (currentState.cart.length !== 0) {
      dispatch({ type: productAction.TOTAL_CART_COST, payload: currentState.cart })
    }
    else {
      dispatch({ type: productAction.TOTAL_ORDER_COST, payload: currentState.order })
    }
  }, [currentState.cart, currentState.order]);

  return (
    <ProductContextProvider.Provider value={{ currentState, dispatch }}>
      {children}
    </ProductContextProvider.Provider>
  );
};

export default ProductContext;
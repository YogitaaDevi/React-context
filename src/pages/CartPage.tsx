import { useContext, useEffect, useState } from 'react'
import { ProductContextProvider } from './ProductContext'
import CartCard from '../components/appComponents/CartCard'
import EmptyCartPage from './EmptyCartPage'

const CartPage = () => {
  const { cart } = useContext(ProductContextProvider)
  const [totalCost, setTotalCost] = useState<number>(0)

  const handleTotalCount = (itemCost: number) => {
    setTotalCost((prevTotal) => prevTotal + itemCost);
  };

  useEffect(() => {
    setTotalCost(0);
    cart.forEach(item => {
      handleTotalCount(item.price * item.count);
    });
  }, [cart]);


  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="text-2xl font-bold">
        Your Cart is filled with:
      </div>
      {cart.length === 0 ? <EmptyCartPage /> :
        <div className="w-1/2 border bg-white flex flex-col items-center mt-10">
          {cart.map((item) => <CartCard item={item} />)}
          <div className="text-lg mt-10 font-bold">Total Price including GST is: {totalCost}</div>
        </div>
      }
    </div>
  )
}

export default CartPage


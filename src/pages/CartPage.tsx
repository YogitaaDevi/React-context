import { useContext, useEffect, useState } from 'react'
import { ProductContextProvider } from './ProductContext'
import CartCard from '../components/appComponents/CartCard'

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
        <div className="flex flex-col items-center mt-10 gap-10 h-full w-full">
            <div className="text-2xl font-bold">
            Your Card is filled with:
            </div>
            <div className="w-1/2 h-75  border bg-white">
                {cart.map((item) => <CartCard item={item} />)}
            </div>
            <div>Total Price including GST is: {totalCost}</div>
        </div>
    )
}

export default CartPage


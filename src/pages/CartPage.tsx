import { useContext, useEffect, useState } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import CartCard from '../components/appComponents/CartCard'
import EmptyCartPage from './EmptyCartPage'
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  
  const { cart } = useContext(ProductContextProvider)
  const [totalCost, setTotalCost] = useState<number>(0)
  const navigate = useNavigate();

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
        <div className="bg-white flex flex-col items-center mt-10">
          {cart.map((item) => <CartCard item={item} />)}
          <div className="text-xl mt-10 font-bold">Total Price including GST is: {totalCost}</div>
        </div>
      }
      <div className="mt-10">
        <Button className='bg-green-500 text-white w-24 h-12 rounded hover:bg-green-700' name='Back' onClick={()=> navigate(-1)}/>
      </div>
    </div>
  )
}

export default CartPage


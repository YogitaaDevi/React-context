import { useContext, useEffect, useState } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import CartCard from '../components/appComponents/CartCard'
import EmptyCartPage from './EmptyCartPage'
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

  const { cart, totalCost, isOrder, paymentSuccess } = useContext(ProductContextProvider)
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="text-2xl font-bold">
        {isOrder ? 
        "Your Cart is filled with:": "Here is your Order - Enjoy!!!"
        }
      </div>
      {cart.length === 0 ? <EmptyCartPage /> :
        <div className="bg-white flex flex-col items-center mt-10">
          {cart.map((item) => <CartCard item={item} key={item.id} />)}
          <div className="text-xl mt-10 font-bold">Total Price including GST is: {totalCost}</div>
        </div>
      }
      {isOrder ?
        <div className="mt-10 flex gap-10">
          <Button className='bg-red-500 text-white w-36 h-12 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300' name='Back' onClick={() => navigate("/home/product")} />
          <Button className='bg-green-500 text-white w-36 h-12 rounded hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300' name='₹ Payment' onClick={() => paymentSuccess()} />
        </div> : ""
      }
    </div>
  )
}

export default CartPage


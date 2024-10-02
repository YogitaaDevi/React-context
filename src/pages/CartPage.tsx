import { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import CartCard from '../components/appComponents/CartCard'
import EmptyCartPage from './EmptyPage'
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

  const { cart, totalCost, isOrder, paymentSuccess } = useContext(ProductContextProvider)
  const navigate = useNavigate();

  const handlePayment = () => {
    paymentSuccess();
    navigate("/home/payment")
  }

  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full">
        <div className="text-2xl font-bold">
          {isOrder ?
            "Your Cart is filled with:" : "Here is your Order - Enjoy!!!"
          }
        </div>
        {
          cart.length === 0 ? <EmptyCartPage /> :
            <div className="bg-white flex flex-col items-center mt-10">
              {cart.map((item) => <CartCard item={item} key={item.id} />)}
              <div className="text-xl mt-10 font-bold">Total Price including GST is: {totalCost}</div>
            </div>
        }
        {
          isOrder ?
            <div className="mt-10 flex gap-10">
              <Button className='bg-red-500' name='Back' onClick={() => navigate("/home/product")} variant='SECONDARY' size='md' />
              {cart.length !== 0 ?
                <Button className='bg-green-500' name='₹ Payment' onClick={handlePayment} variant='SECONDARY' size='md' />
                : ""
              }
            </div> : ""
        }
      </div>
    </>
  )
}

export default CartPage


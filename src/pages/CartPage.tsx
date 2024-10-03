import { useContext, useMemo } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import CartCard from '../components/appComponents/CartCard'
import EmptyCartPage from './EmptyPage'
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

  const { cart, totalCost, paymentSuccess, order } = useContext(ProductContextProvider)
  const navigate = useNavigate();

  const handlePayment = () => {
    paymentSuccess();
    navigate("/home/payment")
  }

  const renderTitle = useMemo(() => (
    <div className="text-2xl font-bold">
      {order.length === 0 ? "Your Cart is filled with:" : "Here is your Order - Enjoy!!!"}
    </div>
  ), [order])

  const renderCart = useMemo(() => (
    <>
      {(cart.length === 0 && order.length === 0) ? <EmptyCartPage /> :
        <div className="bg-white flex flex-col items-center mt-10">
          {cart.length !== 0 ? cart.map((item) => <CartCard item={item} key={item.id} />) : order.map((item) => <CartCard item={item} key={item.id} />)}
          <div className="text-xl mt-10 font-bold">Total Price including GST is: {totalCost}</div>
        </div>}
    </>
  ), [cart, totalCost, order]);

  console.log(cart.length)
  console.log(order.length)

  const renderButton = useMemo(() => (
    <>
      {order.length === 0 && (
        <div className="mt-10 flex gap-10">
          <Button className='bg-red-500' name='Back' onClick={() => navigate("/home/product")} variant='SECONDARY' size='md' />
          {cart.length !== 0 && (
            <Button className='bg-green-500' name='₹ Payment' onClick={handlePayment} variant='SECONDARY' size='md' />
          )}
        </div>
      )}
    </>
  ), [order, cart])

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      {renderTitle}
      {renderCart}
      {renderButton}
    </div>
  );
};

export default CartPage


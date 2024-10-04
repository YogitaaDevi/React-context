import { useContext, useMemo } from "react"
import { ProductContextProvider } from "../context/ProductContext"
import CartCard from "../components/appComponents/CartCard"
import EmptyPage from "./EmptyPage"
import Button from "../components/commonComponents/Button"
import { useNavigate } from "react-router-dom"
import "../assets/scss/CartPage.scss"
import { PAYMENT, PRODUCT } from "../constants/constants"
const CartPage = () => {

  const { cart, totalCost, paymentSuccess, order, totalCostWithGst } = useContext(ProductContextProvider)
  const navigate = useNavigate();

  const handlePayment = () => {
    paymentSuccess();
    navigate(PAYMENT)
  }

  const renderTitle = useMemo(() => (
    <div className="h-24 flex gap-10">
      {order.length === 0 && (
        <div className="w-48 flex justify-center items-center btn-back">
          <Button className="bg-red-500 focus:ring-red-700" name="Back" onClick={() => navigate(PRODUCT)} variant="SECONDARY" />
        </div>
      )}
      <div className="card-title flex justify-center items-center text-4xl font-bold">
        {order.length === 0 ? "Your Cart is filled with:" : "Here is your Order - Enjoy!!!"}
      </div>
      {cart.length !== 0 && (
        <div className="w-48 flex justify-center items-center">
          <Button className="bg-green-500 focus:ring-green-700" name="₹ Payment" onClick={handlePayment} variant="SECONDARY" />
        </div>
      )}
    </div>
  ), [order, cart])

  const renderCart = useMemo(() => (
    <>
      {(cart.length === 0 && order.length === 0) ? <EmptyPage /> :
        <>
          <div className="flex flex-col items-center h-72 overflow-y-auto border shadow justify-center">
            {cart.length !== 0 ? cart.map((item) => <CartCard item={item} key={item.id} />) : order.map((item) => <CartCard item={item} key={item.id} />)}
          </div>
          <div className="w-96 h-48 shadow border rounded-lg font-semibold text-lg">
            <div className="flex justify-between items-center gap-10 h-16">
              <div className="w-24 ml-10">
                Total Price :
              </div>
              <div className="w-12 mr-10">{totalCost}</div>
            </div>
            <div className="flex justify-between items-center h-16">
              <div className="w-24 ml-10">
                GST% :
              </div>
              <div className="w-12 mr-10">0.18</div>
            </div>
            <div className="flex justify-between items-center gap-10 h-16 border">
              <div className="w-24 ml-10">
                Final Price :
              </div>
              <div className="w-12 mr-10">{totalCostWithGst}</div>
            </div>
          </div>
        </>}
    </>
  ), [cart, totalCost, order]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex">
        {renderTitle}
      </div>
      <div className="flex gap-24 justify-center items-center">
        {renderCart}
      </div>
    </div>
  );
};

export default CartPage


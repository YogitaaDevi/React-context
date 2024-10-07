import { useContext, useMemo } from "react"
import { ProductContextProvider } from "../context/ProductContext"
import EmptyPage from "./EmptyPage"
import Button from "../components/commonComponents/Button"
import { useNavigate } from "react-router-dom"
import "../assets/scss/CartPage.scss"
import { PAYMENT, PRODUCT } from "../utils/constants"
import TotalCostCart from "../components/appComponents/TotalCostCart"
const CartPage = () => {

  const { cart, paymentSuccess, order } = useContext(ProductContextProvider)
  const navigate = useNavigate();

  const handlePayment = () => {
    paymentSuccess();
    navigate(PAYMENT)
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex">
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
      </div>
      <div className="flex gap-24 justify-center items-center">
        {(cart.length === 0 && order.length === 0) ? <EmptyPage /> : <TotalCostCart />}
      </div>
    </div>
  );
};

export default CartPage


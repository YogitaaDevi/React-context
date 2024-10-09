import { useContext } from "react"
import CartPage from "./CartPage"
import { ProductContextProvider } from "../context/ProductContext"
import EmptyPage from "./EmptyPage"
import Button from "../components/commonComponents/Button"
import { useNavigate } from "react-router-dom"
import { USER } from "../utils/constants"

const OrderPage = () => {
  const { currentState } = useContext(ProductContextProvider)
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      {currentState.isPayment ?
        <div className="flex flex-col w-5/6 gap-5 border-b-2">
          <div className="flex justify-center w-full">
            <CartPage />
          </div>
        </div>
        : <EmptyPage />
      }
      <div className="">
        <Button className="bg-red-500 focus:ring-red-700" name="Back" onClick={() => navigate(USER)} variant="SECONDARY" />
      </div>
    </div>
  )
}

export default OrderPage

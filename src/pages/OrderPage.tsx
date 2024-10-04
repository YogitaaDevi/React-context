import { useContext, useMemo } from "react"
import CartPage from "./CartPage"
import { ProductContextProvider } from "../context/ProductContext"
import servingChef from "../assets/images/serving-chef.jfif"
import EmptyPage from "./EmptyPage"
import Button from "../components/commonComponents/Button"
import { useNavigate } from "react-router-dom"

const OrderPage = () => {
  const { isPayment } = useContext(ProductContextProvider)
  const navigate = useNavigate()

  const renderedOrder = useMemo(() => {
    return (
      <>
        {isPayment ?
          <div className="flex flex-col w-full gap-5 border-b-2">
            <div className="flex justify-center w-full">
                <img src={servingChef} alt="" className="w-80" />
              <div className="flex w-5/6">
                <CartPage />
              </div>
            </div>
          </div>
          : <EmptyPage />
        }
      </>
    )
  }, [isPayment])

  return (
    <>
      <div className="w-full flex flex-col gap-5 items-center">
        {renderedOrder}
        <div className="">
          <Button className="bg-red-500" name="Back" onClick={() => navigate(-1)} variant="SECONDARY" />
        </div>
      </div>
    </>
  )
}

export default OrderPage

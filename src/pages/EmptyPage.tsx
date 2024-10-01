import { useContext } from "react"
import oopsImage from "../assets/images/oops.jpg"
import { ProductContextProvider } from "../context/ProductContext"

const EmptyPage = () => {
    const {isPayment, isOrder} = useContext(ProductContextProvider)
  return (
    <div className="text-2xl font-bold">
        <img src={oopsImage} className="h-72" />
        {(!isPayment) && (!isOrder) ?
        "OOPS. No recent orders available" : "OOPS. Please add items and visit again"
        }
    </div>
  )
}

export default EmptyPage

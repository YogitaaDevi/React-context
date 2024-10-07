import { useNavigate } from "react-router-dom"
import success from "../assets/images/success.jpg"
import Button from "../components/commonComponents/Button"
import { PRODUCT } from "../utils/constants"

const PaymentSuccessPage = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-4 mt-28">
      <div className="flex text-6xl items-center gap-2 h-20">
        <img src={success} alt="Payment Success" className="w-16 h-16" />
        Payment Successful
      </div>
      <div className="text-2xl">
        We are glad to inform you that your order will be arriving soon...
      </div>
      <div className="flex mt-5">
        <Button className="bg-red-500 focus:ring-red-700" name="Back" onClick={() => navigate(PRODUCT)} variant="SECONDARY" />
      </div>
    </div>
  )
}

export default PaymentSuccessPage;

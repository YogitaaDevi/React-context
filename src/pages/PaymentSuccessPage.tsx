import { useNavigate } from "react-router-dom"
import success from "../assets/images/success.jpg"
import Button from "../components/commonComponents/Button"
const PaymentSuccessPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center gap-4 mt-28'>
            <div className="flex text-6xl items-center gap-2 h-20">
                <img src={success} alt="" className="w-16 h-16" />
                    Payment Successful
            </div>
            <div className="text-2xl">
                We are glad to inform you that your order will be arriving soon...
            </div>
            <div className="flex mt-10">
          <Button className='bg-red-500 text-white w-36 h-12 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300' name='Back' onClick={() => navigate("/home/product")} />
        </div>
        </div>
    )
}

export default PaymentSuccessPage

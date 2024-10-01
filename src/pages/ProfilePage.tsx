import { useContext } from "react"
import { AuthContextProvider } from "../context/AuthContext"
import smiley from "../assets/images/smiley.png"
import servingChef from "../assets/images/serving-chef.jfif"
import Button from "../components/commonComponents/Button"
import CartPage from "./CartPage"
import { ProductContextProvider } from "../context/ProductContext"
import EmptyCartPage from "./EmptyCartPage"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const { user } = useContext(AuthContextProvider)
  const { isPayment } = useContext(ProductContextProvider)
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center'>
      <div className="w-150 h-96 flex">
        <div className='w-full flex flex-col items-center gap-4 font-bold'>
          <div className="text-5xl w-full text-center">
            Dear {user?.name}
          </div>
          <div className='w-full flex justify-center gap-1 items-center text-2xl'>
            Thank you for choosing our Kitchen
            <img src={smiley} alt="" className="w-6 h-6" />
          </div>
          {isPayment ?
            <div className="flex flex-col w-full gap-5 border-2">
              <div className="flex">
                <div className="flex gap-2 text-xl">
                  <img src={servingChef} alt="" className="h-84 w-84" />
                </div>
                <div className="flex justify-center w-full">
                  <CartPage />
                </div>
              </div>
            </div>
            : <EmptyCartPage />
          }
          <div className="">
            <Button className='bg-red-500 text-white w-36 h-10 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300' name='Back' onClick={() => navigate("/home/product")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

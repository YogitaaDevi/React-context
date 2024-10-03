import { Icons, IconType } from "../commonComponents/Icons"
import { useContext, useEffect, useState } from "react"
import { ProductContextProvider } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import { AuthContextProvider } from "../../context/AuthContext"

const Header = () => {

  const { count, hideOrderButton, showOrderButton, isPayment } = useContext(ProductContextProvider)
  const { handleLogout, user } = useContext(AuthContextProvider)
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState<string>("");
  let hours = new Date().getHours();

  useEffect(() => {
    if(hours >= 4 && hours < 12) 
      setGreeting("Good morning -")
    else if (hours >= 12 && hours < 16) 
      setGreeting("Good afternoon -")
    else if (hours >= 16 && hours < 22 )
      setGreeting("Good evening -")
    else
      setGreeting("Night Carvings? -")
    }, [hours])

    const handleUser = () => {
      navigate("/home/user")
      hideOrderButton()
    }

    const handleCart = () => {
      if(isPayment) {
        navigate("/home/payment")
      }
      else {
        navigate("/home/cart")
      }
    }

  return (
    <div className="flex h-20 justify-between items-center bg-slate-500 text-white w-full border">
      <div className="flex items-center justify-center gap-2">
        <div className="h-12 ml-3">
          <Icons type={IconType.FoodServingIcon} />
        </div>
        <div className="text-xl font-bold">
          {greeting} {user.name} !!!
        </div>
      </div>
      <div className="flex gap-8 h-12">
        <div className="flex items-center">
        <img src={user.image} alt="" className="w-10 h-10 rounded-full" onClick={handleUser}/>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="ml-1 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-sm">
            {count}
          </div>
          <div className="-mt-2" onClick={handleCart}><Icons type={IconType.CartIcon} /></div>
        </div>
        <div className="w-12 flex items-center h-12" onClick={handleLogout}><Icons type={IconType.LogoutIcon} /></div>
      </div>
    </div>
  )
}

export default Header

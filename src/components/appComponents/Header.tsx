import { Icons, IconType } from "../../assets/images/Icons"
import { useContext, useEffect, useState } from "react"
import { ProductContextProvider } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import { AuthContextProvider } from "../../context/AuthContext"

const Header = () => {

  const { count } = useContext(ProductContextProvider)
  const { handleLogout, userName } = useContext(AuthContextProvider)
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState<string>("");
  let now = new Date();
  let hours = now.getHours();

  useEffect(() => {
    if(hours >= 4 && hours < 12) 
      setGreeting("Good morning -")
    else if (hours >= 12 && hours < 16) 
      setGreeting("Good afternoon -")
    else if (hours >= 16 && hours < 22 )
      setGreeting("Good evening -")
    else
      setGreeting("Night Carvings? -")
    }, [now, hours])

  return (
    <div className="flex h-20 justify-between items-center bg-slate-500 text-white w-full border">
      <div className="flex items-center justify-center gap-2">
        <div className="h-12 ml-3">
          <Icons type={IconType.FoodServingIcon} />
        </div>
        <div className="text-xl font-bold">
          {greeting} {userName} !!!
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="ml-3 font-bold">
            {count}
          </div>
          <div className="w-12 -mt-2" onClick={() => navigate("/home/cart")}><Icons type={IconType.CartIcon} /></div>
        </div>
        <div className="w-12 flex items-center mt-2" onClick={handleLogout}><Icons type={IconType.LogoutIcon} /></div>
      </div>
    </div>
  )
}

export default Header

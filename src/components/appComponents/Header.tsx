import { Icons, IconType } from "../../assets/images/Icons"
import { useContext } from "react"
import { ProductContextProvider } from "../../pages/ProductContext"
import {useNavigate } from "react-router-dom"
import { AuthContextProvider } from "../../pages/AuthContext"

const Header = () => {
  
  const { count } = useContext(ProductContextProvider)
  const {handleLogout} = useContext(AuthContextProvider)
  const navigate = useNavigate();

  return (
    <div className="flex h-20 justify-between items-center bg-stone-500 text-white w-full border">
      <div className="flex items-center justify-center w-64 gap-2">
        <div className="h-12">
          <Icons type={IconType.FoodServingIcon} />
        </div>
        <div className="text-xl font-bold">
          Welcome User!!!
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="ml-3 font-bold">
          {count}
          </div>
          <div className="w-12 -mt-2" onClick={() => navigate("/cart")}><Icons type={IconType.CartIcon} /></div>
        </div>
        <div className="w-12 flex items-center mt-2" onClick={handleLogout}><Icons type={IconType.LogoutIcon} /></div>
      </div>
    </div>
  )
}

export default Header

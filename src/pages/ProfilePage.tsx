import { useContext } from "react"
import Button from "../components/commonComponents/Button"
import { useNavigate } from "react-router-dom"
import { AuthContextProvider } from "../context/AuthContext"
import { USER, USERORDER } from "../constants/constants"

const ProfilePage = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContextProvider)

  return (
    <div className="w-full flex flex-col items-center pt-5 gap-6">
      <div className="w-3/6 h-96 border-2 flex flex-col items-center gap-4 bg-slate-200 rounded">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-5xl font-bold">Welcome to your Profile</div>
          <img src={user.image} className="w-32 h-32 rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="w-64 h-8 flex">
            <div className="w-36 font-bold text-xl">
              Username:
            </div>
            <div className="text-lg">
              {user.name}
            </div>
          </div>
          <div className="w-64 h-8 flex">
            <div className="w-36 font-bold text-xl">
              Email id:
            </div>
            <div className="text-lg">
              {user.mail}
            </div>
          </div>
          <div className="w-64 h-8 flex">
            <div className="w-36 font-bold text-xl">
              Contact:
            </div>
            <div className="text-lg">
              {user.contact}
            </div>
          </div>
          <div className="w-64 h-8 flex">
            <div className="w-36 font-bold text-xl">
              Location:
            </div>
            <div className="text-lg">
              {user.location}
            </div>
          </div>
        </div>
        <div className="text-lg font-bold">
          If you face any issues, contact: kalakitchen@gmail.com
        </div>
      </div>
      <div className="w-full h-8 flex justify-center gap-5">
        <Button className="bg-slate-700" name="Your Orders" onClick={() => navigate(USERORDER)} variant="PRIMARY" size="lg" />
        <Button className="bg-red-500 focus:ring-red-700" name="Back" onClick={() => navigate(USER)} variant="SECONDARY" />
      </div>
    </div>
  )
}

export default ProfilePage

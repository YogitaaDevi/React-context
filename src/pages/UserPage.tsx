import { useContext } from "react"
import { AuthContextProvider } from "../context/AuthContext"
import smiley from "../assets/images/smiley.png"
import Button from "../components/commonComponents/Button"

import { useNavigate } from "react-router-dom"

const UserPage = () => {
  const { user } = useContext(AuthContextProvider)
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center'>
      <div className="w-150 h-96 flex">
        <div className='w-full flex flex-col items-center justify-center gap-4 font-bold'>
          <div className="text-5xl w-full text-center">
            Dear {user?.name}
          </div>
          <div className='w-full flex flex-col mt-3 ml-20 gap-1 items-center text-2xl'>
            Thank you for being an extraordinary food lover! Your taste for rich, authentic flavors shows you're someone who truly appreciates the art of good food. By choosing Kala's Kitchen, you’ve proven that you have a keen eye for quality and a passion for delicious, mouth-watering dishes. You deserve the best, and it's clear that your excellent taste guides you to nothing less. We’re honored to serve 
            <div className="flex items-center">
            someone as discerning and wonderful as you keep enjoying every bite!
            <img src={smiley} alt="" className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-10 mt-3">
            <Button className="w-36 h-10 bg-slate-700 text-white rounded" name="View Orders" onClick={() => navigate("/home/user/order")} />
            <Button className="w-36 h-10 bg-slate-700 text-white rounded" name="View Profile" onClick={() => navigate("/home/user/profile")} />
          </div>
        </div>
      </div>
      <Button className='bg-red-500' name='Back' onClick={() => navigate("/home/product")} variant='SECONDARY' size='md'/>
    </div>
  )
}

export default UserPage

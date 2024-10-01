import { useContext } from 'react'
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'
import { AuthContextProvider } from '../context/AuthContext'

const ProfilePage = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContextProvider)

  return (
    <>
      <div className='w-full flex flex-col items-center pt-5 gap-6'>
        <div className="w-3/6 h-96 border-2 flex flex-col items-center gap-4 bg-slate-200 rounded">
          <div className='flex flex-col gap-5 items-center'>
            <div className='text-5xl font-bold'>Welcome to your Profile</div>
            <img src={user.image} className='w-32 h-32 rounded-full' />
          </div>
          <div className="flex flex-col">
            <div className='w-64 h-8 flex'>
              <div className='w-36 font-bold text-xl'>
                Username:
              </div>
              <div className='text-lg'>
                {user.name}
              </div>
            </div>
            <div className='w-64 h-8 flex'>
              <div className='w-36 font-bold text-xl'>
                Password:
              </div>
              <div className='text-lg'>
                {user.password}
              </div>
            </div>
            <div className='w-64 h-8 flex'>
              <div className='w-36 font-bold text-xl'>
                Contact:
              </div>
              <div className='text-lg'>
                {user.contact}
              </div>
            </div>
            <div className='w-64 h-8 flex'>
              <div className='w-36 font-bold text-xl'>
                Location:
              </div>
              <div className='text-lg'>
                {user.location}
              </div>
            </div>
          </div>
          <div className="text-lg font-bold">
            If you face any issues, contact: kalakitchen@gmail.com
          </div>
        </div>
        <div className='w-64 h-8 flex justify-center gap-5'>
          <Button className='w-36 h-10 rounded bg-slate-700 text-white' name='Your Orders' onClick={() => navigate("/home/user/order")} />
          <Button className='w-28 h-10 rounded bg-red-500 text-white' name='Back' onClick={() => navigate(-1)} />
        </div>
      </div>
    </>
  )
}

export default ProfilePage

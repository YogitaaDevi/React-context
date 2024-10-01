import React from 'react'
import { useContext } from "react"
import CartPage from "./CartPage"
import { ProductContextProvider } from "../context/ProductContext"
import servingChef from "../assets/images/serving-chef.jfif"
import EmptyPage from "./EmptyPage"
import Button from '../components/commonComponents/Button'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
  const { isPayment } = useContext(ProductContextProvider)
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex flex-col gap-10 items-center'>
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
            : <EmptyPage />
          }
          <div className="">
            <Button className='bg-red-500 text-white w-36 h-10 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300' name='Back' onClick={() => navigate(-1)} />
          </div>
        </div>
    </>
  )
}

export default OrderPage

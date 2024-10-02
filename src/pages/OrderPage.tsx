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
            <Button className='bg-red-500' name='Back' onClick={() => navigate(-1)} variant='SECONDARY' size='md' />
          </div>
        </div>
    </>
  )
}

export default OrderPage

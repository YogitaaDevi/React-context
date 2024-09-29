import { useEffect } from 'react'
import { ProductType } from '../../types/ProductType'

interface CartCardProps {
  item: ProductType,
}

const CartCard = ({ item }: CartCardProps) => {

  const handleItemCost = (price: number, count: number) =>{
    return price*count;
  }

  return (
    <div className="w-full flex h-20 border" key={item.id}>
      <div className="w-28 h-20 flex items-center justify-center">
        <img src={item.image} alt="userImage" className="h-16" />
      </div>
      <div className="w-56 h-20 flex flex-col font-bold justify-center items-center">
        <div className="text-xl">{item.name}</div>
        Rs.{item.price}
      </div>
      <div className="w-24 h-20 flex justify-end items-center">
        <div className="text-xl">X{item.count}</div>
      </div>
      <div className="w-48 h-20 flex justify-center items-center gap-10 text-xl">
        =
        <div className="font-bold">
        {handleItemCost(item.price, item.count)}
        </div>
      </div>
    </div>
  )
}

export default CartCard

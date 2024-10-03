import { useContext } from "react";
import { ProductType } from "../../types/ProductType"
import { ProductContextProvider } from "../../context/ProductContext";
import Button from "../commonComponents/Button";

interface CartCardProps {
  item: ProductType,
}

const CartCard = ({ item }: CartCardProps) => {

  const { handleDecrement, handleIncrement, order } = useContext(ProductContextProvider)
  
  const handleItemCost = (price: number, count: number) => {
    return price * count;
  }

  return (
    <div className="w-full flex items-center gap-5 h-24 border-b">
      <div className="w-28 flex justify-center">
        <img src={item.image} alt="userImage" className="h-20 w-24" />
      </div>
      <div className="w-56 flex flex-col font-bold justify-center items-center">
        <div className="text-2xl">{item.name}</div>
        Rs.{item.price}
      </div>
      {order.length === 0 ? <div className="w-40 flex justify-center gap-4 items-center">
        <Button className="bg-red-500" name="-" onClick={() => handleDecrement(item)} variant="SECONDARY" size="sm" />
        {item.count}
        <Button className=" bg-green-500" name="+" onClick={() => handleIncrement(item)} variant="SECONDARY" size="sm" />
      </div> : ""}
      <div className="flex justify-center items-center gap-10 text-xl">
        =
        <div className="font-bold">
          {handleItemCost(item.price, item.count)}
        </div>
      </div>
    </div>
  )
}

export default CartCard

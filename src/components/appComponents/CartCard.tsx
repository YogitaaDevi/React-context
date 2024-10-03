import { useCallback, useContext, useMemo } from "react";
import { ProductType } from "../../types/ProductType"
import { ProductContextProvider } from "../../context/ProductContext";
import Button from "../commonComponents/Button";

interface CartCardProps {
  item: ProductType,
}

const CartCard = ({ item }: CartCardProps) => {

  const { handleDecrement, handleIncrement, order } = useContext(ProductContextProvider)

  const handleItemCost = useCallback((price: number, count: number) => {
    return price * count;
  }, [item.price, item.count])

  const handleOrder = useMemo(() => (
    order.length === 0 ?
      <>
        <Button className="bg-red-500 focus:ring-red-700" name="-" onClick={() => handleDecrement(item)} variant="SECONDARY" size="sm" />
        {item.count}
        <Button className=" bg-green-500 focus:ring-green-700" name="+" onClick={() => handleIncrement(item)} variant="SECONDARY" size="sm" />
      </> : <> X{item.count} </>
  ), [order, item.count])

  return (
    <div className="w-full flex items-center gap-5 h-24 border-b">
      <div className="w-28 flex justify-center">
        <img src={item.image} alt="userImage" className="h-20 w-24" />
      </div>
      <div className="w-56 flex flex-col font-bold justify-center items-center">
        <div className="text-2xl">{item.name}</div>
        Rs.{item.price}
      </div>
      <div className="w-40 flex justify-center gap-4 text-lg items-center font-semibold">
        {handleOrder}
      </div>
      <div className="flex justify-center items-center gap-10 text-xl">
        =
        <div className="font-bold text-xl">
          {handleItemCost(item.price, item.count)}
        </div>
      </div>
    </div>
  )
}

export default CartCard

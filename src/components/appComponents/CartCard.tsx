import { useContext, useMemo } from "react";
import { ProductType } from "../../types/ProductType"
import { ProductContextProvider } from "../../context/ProductContext";
import Button from "../commonComponents/Button";

interface CartCardProps {
  item: ProductType,
}

const CartCard = ({ item }: CartCardProps) => {

  const { handleDecrement, handleIncrement, order } = useContext(ProductContextProvider)

  const handleItemCost = useMemo(() => {
    return item.price * item.count;
  }, [item.price, item.count])

  const handleAddCart = (item: ProductType) => {
    if (item.quantity === 0) {
      alert("Out of stock")
    }
    else {
      handleIncrement(item)
    }
  }

  const handleOrder = useMemo(() => (
    order.length === 0 ?
      <>
        <Button className="bg-slate-300 focus:ring-slate-500" name="-" onClick={() => handleDecrement(item)} variant="SECONDARY" size="sm" />
        {item.count}
        <Button className="bg-slate-300 focus:ring-slate-500" name="+" onClick={() => handleAddCart(item)} variant="SECONDARY" size="sm" />
      </> : <> X{item.count} </>
  ), [order, item.count])

  return (
    <div className="w-full p-2 flex items-center gap-5 h-26 border-b-2">
      <div className="w-28 flex h-24">
        <img src={item.image} alt="userImage" className="h-22 w-28" />
      </div>
      <div className="w-56 flex flex-col font-semibold justify-center items-center">
        <div className="text-xl">{item.name}</div>
        Rs.{item.price}
      </div>
      <div className="w-40 flex justify-center gap-4 text-lg items-center font-semibold">
        {handleOrder}
      </div>
      <div className="flex justify-center items-center gap-10 text-xl">
        =
        <div className="font-bold text-xl">
          {handleItemCost}
        </div>
      </div>
    </div>
  )
}

export default CartCard

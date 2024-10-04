import { useContext } from "react"
import CartCard from "./CartCard"
import { ProductContextProvider } from "../../context/ProductContext"

const TotalCostCart = () => {
  const { cart, totalCost, order, totalCostWithGst } = useContext(ProductContextProvider)

  return (
    <>
      <div className="flex flex-col items-center h-72 overflow-y-auto border shadow justify-center">
        {cart.length !== 0 ? cart.map((item) => <CartCard item={item} key={item.id} />) : order.map((item) => <CartCard item={item} key={item.id} />)}
      </div>
      <div className="w-96 h-48 shadow border rounded-lg font-semibold text-lg">
        <div className="flex justify-between items-center gap-10 h-16">
          <div className="w-24 ml-10">
            Total Price :
          </div>
          <div className="w-12 mr-10">{totalCost}</div>
        </div>
        <div className="flex justify-between items-center h-16">
          <div className="w-24 ml-10">
            GST% :
          </div>
          <div className="w-12 mr-10">0.18</div>
        </div>
        <div className="flex justify-between items-center gap-10 h-16 border">
          <div className="w-24 ml-10">
            Final Price :
          </div>
          <div className="w-12 mr-10">{totalCostWithGst}</div>
        </div>
      </div>
    </>
  )
}

export default TotalCostCart

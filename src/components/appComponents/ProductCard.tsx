import { useCallback, useContext, useState } from "react"
import { ProductType } from "../../types/ProductType"
import Button from "../commonComponents/Button"
import { ProductContextProvider } from "../../context/ProductContext"
import { productAction } from "../../enum/action"

interface ProductCardProps {
  product: ProductType
}
const ProductCard = ({ product }: ProductCardProps) => {

  const { dispatch } = useContext(ProductContextProvider)
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const handleAddCart = () => {
    setIsAdd(() => true)
    dispatch({type: productAction.ADD_TO_CART, payload: product})
  }
  const handleRemoveCart = useCallback(() => {
    if (product.count === 0)
      setIsAdd(() => false)
    else
      return product.count
  }, [product.count])

  return (
    <div className="relative w-64 h-82 border shadow flex flex-col gap-3 bg-gray-100" key={product.id}>
      <div className="h-48 flex items-center justify-center">
        <img src={product.image} alt="userImage" className="h-40 w-40" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-xl font-semibold">{product.name}</div>
        <div className="text-lg">
          Rs.{product.price}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {!isAdd && <Button className="bg-blue-500 hover:bg-blue-700" name="Add to Cart" onClick={handleAddCart} size="lg" />}
      </div>
      {isAdd && <div className="flex items-center justify-center gap-5">
        <Button className="bg-slate-300 focus:ring-slate-500" name="-" onClick={() => dispatch({type: productAction.REMOVE_FROM_CART, payload: product})} variant="SECONDARY" size="sm" />
        {handleRemoveCart()}
        <Button className="bg-slate-300 focus:ring-slate-500" name="+" onClick={() => dispatch({type: productAction.ADD_TO_CART, payload: product})} variant="SECONDARY" size="sm" />
      </div>}
      {product.quantity === 0 &&
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="w-full h-full flex text-white justify-center items-center text-3xl font-bold">
            Out of stock
          </div>
        </div>
      }
    </div>
  )
}

export default ProductCard
import { useContext } from 'react'
import { ProductType } from '../../types/ProductType'
import Button from '../commonComponents/Button'
import { ProductContextProvider } from '../../pages/ProductContext'

interface CardProps{
    product: ProductType
}
const Card = ({product}: CardProps) => {

    const {handleIncrement, handleDecrement} = useContext(ProductContextProvider)
  return (
    <div className="w-4/6 h-36 border shadow-xl flex gap-10" key={product.id}>
    <div className="flex items-center justify-center ml-4 w-40">
      <img src={product.image} alt="userImage" className="h-32 w-32 rounded-full" />
    </div>
    <div className="flex flex-col items-center justify-center gap-2 w-48">
      <div className="text-2xl font-bold">{product.name}</div>
      <div className="text-lg">₹{product.price}</div>
    </div>
    <div className="flex items-center gap-5">
        <Button className='h-10 w-12 flex items-center' name='-' onClick={() => handleDecrement(product)} />
            {product.count}
        <Button className='h-10 w-12 flex items-center' name='+' onClick={() => handleIncrement(product)} />
    </div>
  </div>
  )
}

export default Card

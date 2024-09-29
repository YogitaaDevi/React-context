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
    <div className="w-64 h-80 border shadow-xl flex flex-col gap-5" key={product.id}>
    <div className="h-36 flex items-center justify-center">
      <img src={product.image} alt="userImage" className="h-32 w-32 rounded-full" />
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-2xl font-bold">{product.name}</div>
      <div className="text-lg">Rs.{product.price}</div>
    </div>
    <div className="flex items-center justify-center gap-5">
        <Button className='h-10 w-12 flex items-center' name='-' onClick={() => handleDecrement(product)} />
            {product.count}
        <Button className='h-10 w-12 flex items-center' name='+' onClick={() => handleIncrement(product)} />
    </div>
  </div>
  )
}

export default Card

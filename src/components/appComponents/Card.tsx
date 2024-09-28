import { ProductType } from '../../types/ProductType'
import Button from '../commonComponents/Button'
interface CardProps{
    product: ProductType
}
const Card = ({product}: CardProps) => {
  return (
    <div className="w-4/6 h-36 border shadow-xl flex gap-10">
    <div className="flex items-center justify-center ml-4 w-40">
      <img src={product.image} alt="userImage" className="h-32 w-32 rounded-full" />
    </div>
    <div className="flex flex-col items-center justify-center gap-2 w-48">
      <div className="text-2xl font-bold">{product.name}</div>
      <div className="text-lg">₹{product.price}</div>
    </div>
    <div className="flex items-center gap-5">
        <Button className='h-10 w-12 flex items-center' name='-' onClick={()=>"hello"} />
        <Button className='h-10 w-12 flex items-center' name='+' onClick={()=>"hello"} />
        <Button className='h-10 w-12 flex items-center' name='+' onClick={()=>"hello"} />
    </div>
  </div>
  )
}

export default Card

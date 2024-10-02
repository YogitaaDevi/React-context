import { useContext, useState } from 'react'
import { ProductType } from '../../types/ProductType'
import Button from '../commonComponents/Button'
import { ProductContextProvider } from '../../context/ProductContext'

interface ProductCardProps {
  product: ProductType
}
const ProductCard = ({ product }: ProductCardProps) => {

  const { handleIncrement, handleDecrement } = useContext(ProductContextProvider)
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const handleAddCart = () => {
    setIsAdd((prev: boolean) => !prev)
    handleIncrement(product)
  }

  return (
    <div className="w-64 h-96 border shadow flex flex-col gap-3 bg-gray-100" key={product.id}>
      <div className="h-48 flex items-center justify-center">
        <img src={product.image} alt="userImage" className="h-40 w-40" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-xl font-bold">{product.name}</div>
        <div className='text-lg'>
          Rs.{product.price}
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
      <Button className='bg-blue-500 hover:bg-blue-700' name='Add to Cart' onClick={handleAddCart} variant='PRIMARY' />
      </div>  
      {isAdd ? <div className="flex items-center justify-center gap-5 mt-2">
        <Button className='bg-red-500' name='-' onClick={() => handleDecrement(product)} variant='SECONDARY' size='sm' />
        {product.count}
        <Button className='bg-green-500' name='+' onClick={() => handleIncrement(product)} variant='SECONDARY' size='sm' />
      </div> : ""}
    </div>
  )
}

export default ProductCard

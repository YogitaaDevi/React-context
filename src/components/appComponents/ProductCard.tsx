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
      <Button className='h-10 w-48 flex items-center justify-center bg-blue-500 rounded text-white hover:bg-blue-700' name='Add to Cart' onClick={() => setIsAdd((prev: boolean) => !prev)} variant='PRIMARY' />
      </div>
      {isAdd ? <div className="flex items-center justify-center gap-5 mt-2">
        <Button className='h-10 w-12 flex items-center justify-center bg-red-500 rounded text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300' name='-' onClick={() => handleDecrement(product)} variant='SECONDARY' />
        {product.count}
        <Button className='h-10 w-12 flex items-center justify-center bg-green-500 rounded text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300' name='+' onClick={() => handleIncrement(product)} variant='SECONDARY' />
      </div> : ""}
    </div>
  )
}

export default ProductCard

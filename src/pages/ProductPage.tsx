import { useContext } from 'react'
import Card from '../components/appComponents/ProductCard'
import { ProductContextProvider } from './ProductContext'

const ProductPage = () => {
  const {product} = useContext(ProductContextProvider)
  return (
    <>
      <div className='flex flex-wrap w-5/6 gap-5 items-center p-5'>
        {product.map((product) => <Card product={product}/> )}
      </div>
    </>
  )
}

export default ProductPage

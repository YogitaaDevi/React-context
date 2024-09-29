import { useContext } from 'react'
import Card from '../components/appComponents/ProductCard'
import { ProductContextProvider } from './ProductContext'

const ProductPage = () => {

  const {product} = useContext(ProductContextProvider)
  
  return (
    <>
      <div className='flex flex-wrap w-full gap-5 items-center justify-center'>
        {product.map((product) => <Card product={product}/> )}
      </div>
    </>
  )
}

export default ProductPage

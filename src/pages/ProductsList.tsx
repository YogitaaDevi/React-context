import { useContext } from 'react'
import ProductCard from '../components/appComponents/ProductCard'
import { ProductContextProvider } from '../context/ProductContext'

const ProductsList = () => {

  const { product } = useContext(ProductContextProvider)

  return (
    <>
      <div className='flex flex-wrap w-full gap-5 items-center justify-center'>
        {product.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </>
  )
}

export default ProductsList

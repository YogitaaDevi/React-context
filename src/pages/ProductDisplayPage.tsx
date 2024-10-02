import ProductName from './ProductName'
import ProductsList from './ProductPage'

const ProductDisplayPage = () => {
  return (
    <>
    <div className="flex flex-col gap-2 items-center">
    <ProductName/>
    <ProductsList/>
    </div>
    </>
  )
}

export default ProductDisplayPage

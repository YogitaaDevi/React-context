import ProductName from './ProductName'
import ProductPage from './ProductPage'

const ProductDisplayPage = () => {
  return (
    <>
    <div className="flex flex-col gap-2 items-center">
    <ProductName/>
    <ProductPage/>
    </div>
    </>
  )
}

export default ProductDisplayPage

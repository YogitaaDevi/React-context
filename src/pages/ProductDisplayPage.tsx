import ProductFilter from "./ProductFilter"
import ProductName from "./ProductName"
import ProductsList from "./ProductPage"

const ProductDisplayPage = () => {
  return (
    <>
    <div className="flex flex-col gap-3 items-center">
    <ProductName/>
    <ProductFilter/>
    <ProductsList/>
    </div>
    </>
  )
}

export default ProductDisplayPage

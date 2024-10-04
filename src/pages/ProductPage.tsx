import { useContext, useMemo } from "react"
import ProductCard from "../components/appComponents/ProductCard"
import { ProductContextProvider } from "../context/ProductContext"

const ProductsList = () => {

  const { product, searchData, isSearch } = useContext(ProductContextProvider)
  const renderProduct = useMemo(() => (
    isSearch ? searchData.map((product) => <ProductCard product={product} key={product.id} />) :
      product.map((product) => <ProductCard product={product} key={product.id} />)
  ), [product, searchData, isSearch])
  return (
    <>
      <div className="flex flex-wrap w-full gap-5 items-center justify-center overflow-y-sroll">
        {renderProduct}
      </div>
    </>
  )
}

export default ProductsList

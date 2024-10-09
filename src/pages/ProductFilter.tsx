import TextField from '../components/commonComponents/TextField'
import "../assets/scss/ProductFilter.scss"
import { Icons, IconType } from '../components/commonComponents/Icons'
import { useContext, useEffect, useState } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import { ProductType } from '../types/ProductType'
import { productAction } from '../enum/action'

const ProductFilter = () => {

  const [search, setSearch] = useState<string>("")
  const { currentState, dispatch } = useContext(ProductContextProvider)
  let searchedData: ProductType[]

  useEffect(() => {
    if (search.length) {
      searchedData = currentState.product.filter((data: ProductType) =>
        data.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (searchedData) {
      dispatch({ type: productAction.SEARCH_DATA, payload: searchedData })
    }
    else
      dispatch({ type: productAction.DISPLAY_DATA, payload: []})
  }, [search])

  return (
    <div className='flex mb-5'>
      <div className='h-14 border-l-2 border-b-2 border-t-2 flex items-center'>
        <Icons type={IconType.SearchIcon} />
      </div>
      <TextField className='h-14 search-field border-r-2 border-b-2 border-t-2 focus:outline-none' type='text' placeholder='Search for food' onChange={(e: any) => setSearch(e.target.value)} />
    </div>
  )
}

export default ProductFilter

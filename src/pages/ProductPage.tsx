import React from 'react'
import products from '../data/Products'
import Card from '../components/appComponents/Card'

const ProductPage = () => {
  return (
    <>
      <div className='flex flex-wrap w-5/6 gap-5 items-center p-5'>
        {products.map((product) => <Card product={product}/> )}
      </div>
    </>
  )
}

export default ProductPage

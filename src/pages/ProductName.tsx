import chef from "../assets/images/chef.png"
const ProductName = () => {
  return (
    <>
      <div className='flex w-5/6 gap-1 flex-col justify-center items-center h-24'>
        <div className='flex gap-3 items-center'>
          <img src={chef} className="h-12 w-12" />
          <div className="text-2xl font-bold">
            Hana's Kitchen
            <div className="text-lg">
              A Multi Cuisine Restaurent
            </div>
          </div>
        </div>
        <div className='text-xl'>
        </div>
      </div>
    </>
  )
}

export default ProductName

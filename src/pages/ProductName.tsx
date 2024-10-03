import chef from "../assets/images/chef.png"
const ProductName = () => {
  return (
    <>
      <div className="flex w-5/6 gap-1 flex-col justify-center items-center h-24">
        <div className="flex gap-3 items-center">
          <img src={chef} className="h-20 w-20" />
          <div className="text-5xl font-bold">
            KaLa's Kitchen
            <div className="text-lg">
              An Indian Cuisine Restaurent
            </div>
          </div>
        </div>
        <div className="text-xl">
        </div>
      </div>
    </>
  )
}

export default ProductName

import food from "../../assets/images/food.jpg"
const Header = () => {
  return (
    <div className="flex h-20 justify-between items-center bg-stone-500 text-white w-full border">
      <div className="flex items-center justify-center w-56 gap-2">
        <div className="h-12">
          <img src={food} alt="" className="h-14 w-14 rounded-full" />
        </div>
        <div className="text-xl">
          Welcome User!!!
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-12">w</div>
        <div className="w-12">w</div>
        <div className="w-12">w</div>
      </div>
    </div>
  )
}

export default Header

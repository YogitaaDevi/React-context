import oopsImage from "../assets/images/oops.jpg"
const EmptyCartPage = () => {
  return (
    <div className="text-2xl font-bold">
        <img src={oopsImage} alt="" />
    OOPS. Please add items and visit again
    </div>
  )
}

export default EmptyCartPage

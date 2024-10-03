import { useNavigate } from "react-router-dom"
import chef from "../assets/images/chef-bg.jpg"
import Button from "../components/commonComponents/Button"
import "../assets/scss/HomePage.scss"

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="relative overflow-hidden bg bg-no-repeat text-center chef-image">
        <img src={chef} className="chef-image w-full" alt="Chef" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="flex h-full mt-24 justify-center">
            <div className="text-white w-150 h-24 flex flex-col gap-6">
              <div className="text-7xl">Welcome to Kala's Kitchen</div>
              <div className="text-lg">
                Experience the rich flavors of India, right at your table. At Kala"s Kitchen, we offer a delectable range of both vegetarian and non-vegetarian dishes, prepared with authentic Indian spices and fresh ingredients. From traditional curries to mouth-watering tandoori delights, our menu brings you the best of Indian cuisine. Whether you"re craving a comforting idly or a flavorful non-veg biryani, Kala"s Kitchen has something to satisfy every palate. Join us for a taste of India!
              </div>
              <div>
                <Button className="text-black bg-white hover:bg-slate-200" name="View items" onClick={() => navigate("/home/product")} size="lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage
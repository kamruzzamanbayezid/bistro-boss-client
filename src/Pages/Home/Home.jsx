import Banner from "../../Components/Home/Banner/Banner";
import BistroBoss from "../../Components/Home/BistroBoss/BistroBoss";
import OrderOnline from "../../Components/Home/OrderOnline/OrderOnline";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <div className="mb-20 mt-10">
                        <OrderOnline />
                  </div>
                  <div className="mb-20">
                        <BistroBoss />
                  </div>
            </div>
      );
};

export default Home;
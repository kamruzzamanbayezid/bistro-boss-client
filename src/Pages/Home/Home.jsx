import Banner from "../../Components/Home/Banner/Banner";
import BistroBoss from "../../Components/Home/BistroBoss/BistroBoss";
import CallUs from "../../Components/Home/CallUs/CallUs";
import OrderOnline from "../../Components/Home/OrderOnline/OrderOnline";
import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";
import RecommendMenus from "../../Components/Home/RecommendMenus/RecommendMenus";

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
                  <div className="mb-20">
                        <PopularMenu />
                  </div>
                  <div className="mb-20">
                        <CallUs />
                  </div>
                  <div className="mb-20">
                        <RecommendMenus />
                  </div>
            </div>
      );
};

export default Home;
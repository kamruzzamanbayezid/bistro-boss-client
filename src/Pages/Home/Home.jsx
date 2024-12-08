import Banner from "../../Components/Home/Banner/Banner";
import BistroBoss from "../../Components/Home/BistroBoss/BistroBoss";
import OrderOnline from "../../Components/Home/OrderOnline/OrderOnline";
import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";

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
            </div>
      );
};

export default Home;
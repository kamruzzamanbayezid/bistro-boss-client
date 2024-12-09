import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Home/Banner/Banner";
import BistroBoss from "../../Components/Home/BistroBoss/BistroBoss";
import CallUs from "../../Components/Home/CallUs/CallUs";
import FromOurMenu from "../../Components/Home/FromOurMenu/FromOurMenu";
import OrderOnline from "../../Components/Home/OrderOnline/OrderOnline";
import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";
import RecommendMenus from "../../Components/Home/RecommendMenus/RecommendMenus";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";

const Home = () => {
      return (
            <div>
                  <Helmet title="Home | Bistro Boss"></Helmet>
                  <div>
                        <Banner />
                  </div>
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
                  <div className="mb-20">
                        <FromOurMenu />
                  </div>
                  <div className="mb-20">
                        <Testimonials />
                  </div>
            </div>
      );
};

export default Home;
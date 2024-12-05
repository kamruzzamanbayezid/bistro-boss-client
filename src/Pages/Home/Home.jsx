import Banner from "../../Components/Home/Banner/Banner";
import OrderOnline from "../../Components/Home/OrderOnline/OrderOnline";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <div className="mb-20 mt-10">
                        <OrderOnline />
                  </div>
            </div>
      );
};

export default Home;
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'

const Banner = () => {
      return (
            <Carousel className="text-center">
                  <div className="lg:h-[650px] overflow-hidden">
                        <img src={img1} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:h-[650px] overflow-hidden">
                        <img src={img2} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:h-[650px] overflow-hidden">
                        <img src={img3} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:h-[650px] overflow-hidden">
                        <img src={img4} className="w-full h-full object-cover" />
                  </div>
            </Carousel>


      );
};

export default Banner;
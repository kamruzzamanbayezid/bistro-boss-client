import PropTypes from 'prop-types';
import CommonTitle from '../../Shared/CommonTitle/CommonTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'

const OrderOnline = () => {
      return (
            <div className='max-w-[1320px] mx-auto'>
                  <CommonTitle subTitle='---From 11:00am to 10:00pm---' title='ORDER ONLINE' />

                  {/* Sliders */}
                  <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                              clickable: true,
                        }}
                        breakpoints={{
                              640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                              },
                              768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                              },
                              1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                              },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide1} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Salads</p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide2} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Pizza</p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide3} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Soup</p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide4} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Dessert</p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide3} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Soup</p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="relative h-[400px]">
                                    {/* Background Image */}
                                    <img className="w-full h-full object-cover" src={slide1} alt="Salads" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

                                    {/* Content */}
                                    <p className="absolute inset-x-0 bottom-4 text-white text-3xl text-center">Salad</p>
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </div>
      );
};

OrderOnline.propTypes = {

};

export default OrderOnline;
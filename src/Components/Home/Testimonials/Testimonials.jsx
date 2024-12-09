import CommonTitle from '../../Ui/CommonTitle';
import useReviews from '../../../Hooks/apis/useReviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating, ThinStar } from '@smastrom/react-rating';
import icon from '../../../assets/icon/quote-left 1.png';

// css for rating
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

// Declare it outside your component so it doesn't get re-created
const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: '#fbf1a9'
}

const Testimonials = () => {

      const { reviews } = useReviews();

      return (
            <div>
                  <CommonTitle subTitle='---What Our Clients Say---' title='Testimonials' />
                  <div className='max-width'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                              {
                                    reviews?.map(review => (
                                          <SwiperSlide
                                                key={review?._id}
                                                review={review}
                                          >
                                                <div className='flex flex-col items-center justify-center'>
                                                      <Rating readOnly style={{ maxWidth: 200, marginBottom: '20px' }} value={review?.rating} itemStyles={myStyles} />
                                                      <img className='w-24 h-24 mb-8' src={icon} alt="" />
                                                      <p className='px-10 md:px-28 text-[#444] text-xl text-center'>{review?.details}</p>
                                                      <h4 className='mt-2 text-[#CD9003] text-3xl font-medium'>{review?.name}</h4>
                                                </div>
                                          </SwiperSlide>
                                    ))
                              }
                        </Swiper>

                  </div>
            </div>
      );
};

export default Testimonials;
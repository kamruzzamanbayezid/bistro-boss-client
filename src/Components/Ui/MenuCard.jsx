import PropTypes from 'prop-types';
import CommonButton from './CommonButton';
import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2'
import useMyCartsData from '../../Hooks/apis/useMyCartsData';

const MenuCard = ({ item }) => {

      const { user } = UseAuth();
      const location = useLocation();
      const navigate = useNavigate();

      const { refetch } = useMyCartsData();

      const apiHandler = UseAxiosSecure();

      const handleAddToCart = async (item) => {
            if (user && user?.email) {
                  const cartData = {
                        menuId: item?._id,
                        email: user?.email,
                        name: item?.name,
                        image: item?.image,
                        category: item?.category,
                        price: item?.price,
                  }
                  try {
                        const response = await apiHandler.post('/carts', cartData);
                        if (response?.data?.insertedId) {
                              Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Item added to the cart",
                                    showConfirmButton: false,
                                    timer: 1500
                              });

                              // refresh cart data to update navbar cart icon
                              refetch()
                        }

                  } catch (error) {
                        console.error(error)
                  }

            }
            else {
                  navigate('/login', { state: location?.pathname })
            }

      }

      return (
            <div className='flex flex-col bg-[#F3F3F3]  pb-14'>
                  <figure className='relative w-full h-[300px] mb-6'>
                        <img className='w-full object-cover' src={item?.image} alt="" />
                        <span className='absolute top-5 right-5 text-white font-semibold bg-black px-5 py-2'>${item?.price}</span>
                  </figure>
                  <div className='text-center px-8'>
                        <h4 className='text-2xl font-semibold mb-2'>{item?.name}</h4>
                        <span className='mb-6'>{item?.recipe}</span>
                        <div onClick={() => handleAddToCart(item)}>
                              <CommonButton text='Add to cart' />
                        </div>
                  </div>
            </div>
      );
};

MenuCard.propTypes = {
      item: PropTypes.object.isRequired,
}

export default MenuCard;
import PropTypes from 'prop-types';
import CommonButton from './CommonButton';

const MenuCard = ({ item }) => {
      return (
            <div className='flex flex-col bg-[#F3F3F3]  pb-14'>
                  <figure className='w-full h-[300px] mb-6'>
                        <img className='w-full object-cover' src={item?.image} alt="" />
                  </figure>
                  <div className='text-center px-8'>
                        <h4 className='text-2xl font-semibold mb-2'>{item?.name}</h4>
                        <span className='mb-6'>{item?.recipe}</span>
                        <div>
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
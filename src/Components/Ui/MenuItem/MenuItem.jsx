import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
      return (
            <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-7'>
                  <div>
                        <img className='rounded-tr-full rounded-br-full rounded-bl-full w-28 h-24' src={item?.image} alt="" />
                  </div>
                  <div>
                        <h4 className='text-xl mb-2'>{item?.name + ' ------------------'}</h4>
                        <p className='text-[#737373] text-center md:text-start'>{item?.recipe}</p>
                  </div>
            </div>
      );
};

MenuItem.propTypes = {
      item: PropTypes.object.isRequired,
};

export default MenuItem;
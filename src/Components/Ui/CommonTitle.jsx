import PropTypes from 'prop-types';

const CommonTitle = ({ title = "ORDER ONLINE", subTitle = "---From 11:00am to 10:00pm---", secondary = false }) => {
      return (
            <div className='flex flex-col items-center justify-center text-center mb-10'>
                  <p className='text-[#D99904] text-xl font-normal mb-4'>{subTitle}</p>
                  <h2 className={`${secondary ? 'text-white' : 'text-[#151515]'} border-y-4 border-[#E8E8E8] py-4 text-4xl w-[350px]`}>{title}</h2>
            </div>
      );
};

CommonTitle.propTypes = {
      title: PropTypes.string,
      subTitle: PropTypes.string,
      secondary: PropTypes.bool
};

export default CommonTitle;
import PropTypes from 'prop-types';

const SharedCover = ({ bgImg, title, subtitle }) => {
      return (
            <div
                  className="object-cover bg-no-repeat bg-cover py-14 md:py-24"
                  style={{
                        background: `url(${bgImg}) lightgray 50% / cover no-repeat`,
                        backgroundAttachment: 'fixed'
                  }}
            >
                  {/* Overlay and Content */}
                  <div className="text-center max-w-[1000px] w-[90%] md:w-[80%] mx-auto bg-[#15151599] p-6 md:px-12 md:py-20 lg:px-24 lg:py-16 text-white mt-10">
                        <h2 className="text-5xl font-semibold mb-3">{title}</h2>
                        <p className='font-semibold'>
                              {subtitle}
                        </p>
                  </div>
            </div>
      );
};

SharedCover.propTypes = {
      bgImg: PropTypes.string.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
};

export default SharedCover;

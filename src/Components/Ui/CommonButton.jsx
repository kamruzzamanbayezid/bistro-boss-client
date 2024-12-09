import PropTypes from 'prop-types'

const CommonButton = ({ text, secondary = false }) => {
      return (
            <div className="flex justify-center mt-12">
                  <button className="">
                        <span className={`${secondary ? 'text-white bg-black' : 'text-[#BB8506] bg-[#E8E8E8]'} text-xl font-medium hover:bg-[#1F2937] rounded-lg px-7 py-5 border-b-[3px] border-b-[#BB8506] hover:border-b-0 transition delay-100`}>{text}</span>
                  </button>
            </div>
      );
};

CommonButton.propTypes = {
      text: PropTypes.string.isRequired,
      secondary: PropTypes.bool
}

export default CommonButton;
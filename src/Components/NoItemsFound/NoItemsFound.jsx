import PropTypes from 'prop-types';

const NoItemsFound = ({ text = "Items" }) => {
      return (
            <div className="flex flex-col items-center justify-center text-center py-20 px-6">
                  {/* Icon */}
                  <div className="text-gray-400 mb-6">
                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-16 h-16"
                        >
                              <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8.25v7.5m4.5-4.5h-9m6.75-7.5H9.75a3 3 0 00-3 3v12.75a3 3 0 003 3h4.5a3 3 0 003-3V4.5a3 3 0 00-3-3z"
                              />
                        </svg>
                  </div>

                  {/* Message */}
                  <h2 className="text-2xl font-bold text-gray-700 mb-3">No {text} Found</h2>
                  <p className="text-gray-500 max-w-md">
                        We couldn't find what you're looking for. Please try again later or
                        check other sections.
                  </p>
            </div>
      );
};

NoItemsFound.propTypes = {
      text: PropTypes.string
}

export default NoItemsFound;

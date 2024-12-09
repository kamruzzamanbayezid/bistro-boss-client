import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
      return (
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-7">
                  {/* Image Container */}
                  <figure className="rounded-tr-full rounded-br-full rounded-bl-full w-[118px] h-[104px] overflow-hidden flex-shrink-0">
                        <img
                              className="w-full h-full object-cover"
                              src={item?.image}
                              alt={item?.name || "Menu item"}
                        />
                  </figure>

                  {/* Content */}
                  <div className="flex flex-col md:flex-row gap-2">
                        <div>
                              <h4 className="text-xl mb-2">
                                    {item?.name + " ------------------"}
                              </h4>
                              <p className="text-[#737373] text-center md:text-start">
                                    {item?.recipe}
                              </p>
                        </div>
                        <span className="text-[#BB8506] text-xl">${item?.price}</span>
                  </div>
            </div>
      );
};

MenuItem.propTypes = {
      item: PropTypes.object.isRequired,
};

export default MenuItem;

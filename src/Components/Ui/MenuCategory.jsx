import PropTypes from 'prop-types';
import SharedCover from "./SharedCover";
import CommonButton from './CommonButton';
import MenuItem from './MenuItem';

const MenuCategory = ({ menus, bgImg, title, subtitle, btnText }) => {

      return (
            <div>
                  <SharedCover bgImg={bgImg} title={title} subtitle={subtitle} />
                  <div className='mt-8'>
                        <div className="max-w-[1320px] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {
                                    menus?.map(menu => (
                                          <MenuItem
                                                key={menu?._id}
                                                item={menu}
                                          />
                                    ))
                              }
                        </div>
                        <CommonButton text={btnText} />
                  </div>
            </div>
      );
};

MenuCategory.propTypes = {
      menus: PropTypes.array,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      bgImg: PropTypes.string,
      btnText: PropTypes.string,
}

export default MenuCategory;
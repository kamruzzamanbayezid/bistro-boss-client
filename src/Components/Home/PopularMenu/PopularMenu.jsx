import useMenu from "../../../Hooks/apis/useMenu";
import CommonButton from "../../Ui/CommonButton/CommonButton";
import CommonTitle from "../../Ui/CommonTitle/CommonTitle";
import MenuItem from "../../Ui/MenuItem/MenuItem";

const PopularMenu = () => {

      const { menus: popularMenu } = useMenu('popular');

      return (
            <div>
                  <CommonTitle
                        subTitle="---Check out our popular menus---"
                        title="FROM OUR MENU"
                  />
                  <div className="max-w-[1320px] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                              popularMenu?.map(menu => (
                                    <MenuItem
                                          key={menu?._id}
                                          item={menu}
                                    />
                              ))
                        }
                  </div>
                  <CommonButton text="View Full  Menu"/>
            </div>
      );
};

export default PopularMenu;
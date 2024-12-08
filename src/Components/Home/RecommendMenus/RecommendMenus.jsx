import useMenu from "../../../Hooks/apis/useMenu";
import CommonTitle from "../../Ui/CommonTitle";
import MenuCard from "../../Ui/MenuCard";

const RecommendMenus = () => {

      const { menus } = useMenu();

      return (
            <div>
                  <CommonTitle
                        subTitle="---Should Try---"
                        title="CHEF RECOMMENDS"
                  />

                  <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
                        {
                              menus?.slice(0, 3).map(menu => (
                                    <MenuCard
                                          key={menu?._id}
                                          item={menu}
                                    />
                              ))
                        }
                  </div>
            </div>
      );
};

export default RecommendMenus;
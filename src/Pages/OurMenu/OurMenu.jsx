import CommonButton from "../../Components/Ui/CommonButton";
import CommonTitle from "../../Components/Ui/CommonTitle";
import MenuCategory from "../../Components/Ui/MenuCategory";
import MenuItem from "../../Components/Ui/MenuItem";
import PageBanner from "../../Components/Ui/PageBanner";
import useMenu from "../../Hooks/apis/useMenu";
import bannerImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const OurMenu = () => {

      const { menus: salads } = useMenu('salad')
      const { menus: dessert } = useMenu('dessert')
      const { menus: pizza } = useMenu('pizza')
      const { menus: soup } = useMenu('soup')
      const { menus: offered } = useMenu('offered')

      return (
            <div>
                  <PageBanner
                        bgImg={bannerImg}
                        title='OUR MENU'
                        subtitle='Would you like to try a dish?'
                  />

                  <div className="mt-10">
                        <CommonTitle
                              subTitle="---Don't miss---"
                              title="TODAY'S OFFER"
                        />
                  </div>

                  {/* Offered */}
                  <div className='mt-8 mb-20'>
                        <div className="max-w-[1320px] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {
                                    offered?.map(menu => (
                                          <MenuItem
                                                key={menu?._id}
                                                item={menu}
                                          />
                                    ))
                              }
                        </div>
                        <CommonButton text='ORDER YOUR FAVOURITE FOOD' />
                  </div>

                  {/* Desserts */}
                  <div className="mb-20">
                        <MenuCategory
                              bgImg={dessertImg}
                              menus={dessert}
                              subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                              title='DESSERTS'
                              btnText='ORDER YOUR FAVOURITE FOOD'
                        />
                  </div>

                  {/* PIZZA */}
                  <div className="mb-20">
                        <MenuCategory
                              bgImg={pizzaImg}
                              menus={pizza}
                              subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                              title='PIZZA'
                              btnText='ORDER YOUR FAVOURITE FOOD'
                        />
                  </div>

                  {/* SALADS */}
                  <div className="mb-20">
                        <MenuCategory
                              bgImg={saladImg}
                              menus={salads}
                              subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                              title='SALADS'
                              btnText='ORDER YOUR FAVOURITE FOOD'
                        />
                  </div>

                  {/* SOUPS */}
                  <div className="mb-20">
                        <MenuCategory
                              bgImg={soupImg}
                              menus={soup}
                              subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                              title='SOUPS'
                              btnText='ORDER YOUR FAVOURITE FOOD'
                        />
                  </div>

            </div>
      );
};

export default OurMenu;
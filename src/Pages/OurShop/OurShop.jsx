import PageBanner from "../../Components/Ui/PageBanner";
import shopBanner from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import '../../css/ourShop.css'
import { useState } from "react";
import useMenu from "../../Hooks/apis/useMenu";
import MenuCard from "../../Components/Ui/MenuCard";
import NoItemsFound from "../../Components/NoItemsFound/NoItemsFound";

const OurShop = () => {

      const [tabIndex, setTabIndex] = useState(0);

      const { menus: salads } = useMenu('salad')
      const { menus: dessert } = useMenu('dessert')
      const { menus: pizza } = useMenu('pizza')
      const { menus: soup } = useMenu('soup')
      const { menus: drinks } = useMenu('drinks')

      return (
            <div>
                  <PageBanner
                        bgImg={shopBanner}
                        title='OUR SHOP'
                        subtitle='Would you like to try a dish?'
                  />

                  <div className="py-20 max-width px-4 md:px-0">
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList>
                                    <Tab>Salad</Tab>
                                    <Tab>Pizza</Tab>
                                    <Tab>Soups</Tab>
                                    <Tab>Desserts</Tab>
                                    <Tab>Drinks</Tab>
                              </TabList>

                              <TabPanel>
                                    {
                                          salads?.length > 0 ?
                                                <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-10">
                                                      {
                                                            salads?.slice(0, 3).map(menu => (
                                                                  <MenuCard
                                                                        key={menu?._id}
                                                                        item={menu}
                                                                  />
                                                            ))
                                                      }
                                                </div>
                                                :
                                                <NoItemsFound text="Salad" />
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          pizza?.length > 0 ?
                                                <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-10">
                                                      {
                                                            pizza?.slice(0, 3).map(menu => (
                                                                  <MenuCard
                                                                        key={menu?._id}
                                                                        item={menu}
                                                                  />
                                                            ))
                                                      }
                                                </div>
                                                :
                                                <NoItemsFound text="Pizza" />
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          soup?.length > 0 ?
                                                <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-10">
                                                      {
                                                            soup?.slice(0, 3).map(menu => (
                                                                  <MenuCard
                                                                        key={menu?._id}
                                                                        item={menu}
                                                                  />
                                                            ))
                                                      }
                                                </div>
                                                :
                                                <NoItemsFound text="Soup"/>
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          dessert?.length > 0 ?
                                                <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-10">
                                                      {
                                                            dessert?.slice(0, 3).map(menu => (
                                                                  <MenuCard
                                                                        key={menu?._id}
                                                                        item={menu}
                                                                  />
                                                            ))
                                                      }
                                                </div>
                                                :
                                                <NoItemsFound text="Dessert"/>
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          drinks?.length > 0 ?
                                                <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-10">
                                                      {
                                                            drinks?.slice(0, 3).map(menu => (
                                                                  <MenuCard
                                                                        key={menu?._id}
                                                                        item={menu}
                                                                  />
                                                            ))
                                                      }
                                                </div>
                                                :
                                                <NoItemsFound text="Drink" />
                                    }
                              </TabPanel>
                        </Tabs>
                  </div>

            </div>
      );
};

export default OurShop;
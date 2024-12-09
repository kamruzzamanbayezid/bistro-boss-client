import featuredImg from '../../../assets/home/featured.jpg';
import CommonTitle from '../../Ui/CommonTitle';

const FromOurMenu = () => {
      return (
            <div
                  className="py-16 md:py-24 flex items-center justify-center"
                  style={{
                        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${featuredImg}) lightgray 50% / cover no-repeat`,
                        backgroundAttachment: "fixed",
                  }}
            >
                  {/* Content Over the Image */}
                  <div className="flex flex-col items-center justify-center px-4">
                        {/* Common Title */}
                        <CommonTitle secondary={true} subTitle="---Check it out---" title="FROM OUR MENU" />

                        {/* Main Content */}
                        <div className="max-width flex flex-col lg:flex-row items-center gap-12">
                              {/* Left Image */}
                              <div className="w-full lg:w-1/2">
                                    <img
                                          className="rounded-lg shadow-lg"
                                          src={featuredImg}
                                          alt="Menu Item"
                                    />
                              </div>

                              {/* Right Text Content */}
                              <div className="w-full lg:w-1/2 text-white space-y-4 text-center lg:text-left">
                                    <p className="text-2xl">March 20, 2023</p>
                                    <p className="text-3xl font-bold">WHERE CAN I GET SOME?</p>
                                    <p className="text-lg mb-4">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                          Error voluptate facere, deserunt dolores maiores quod
                                          nobis quas quasi. Eaque repellat recusandae ad
                                          laudantium tempore consequatur consequuntur omnis ullam
                                          maxime tenetur.
                                    </p>
                                    <button className="text-[#fff] text-xl font-medium hover:bg-[#1F2937] rounded-lg px-7 py-5 border-b-[3px] border-b-[#fff] hover:border-b-0 transition delay-100">
                                          Read More
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FromOurMenu;

import bgImg from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
      return (
            <div
                  className='object-cover bg-no-repeat bg-cover py-24 bg-fixed'
                  style={ {backgroundImage: `url(${bgImg})`}}
            >
                  <div className='text-center w-[90%] md:w-[80%] mx-auto bg-white p-6 md:px-12 md:py-20 lg:px-24 lg:py-16'>
                        <h2 className='text-5xl mb-3'>Bistro Boss</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                  </div>
            </div>
      );
};

export default BistroBoss;
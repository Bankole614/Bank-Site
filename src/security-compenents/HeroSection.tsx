import photo from '../Assets/security-hero.jpg'

const HeroSection = () => {
  return (
    <div className='container pt-28 pb-14'>
      <div className='flex flex-col-reverse lg:flex-row bg-[#202020] justify-between xl:p-8 p-4 rounded-2xl'>
        <div className="flex flex-col items-center xl:items-start bg-[#1a1a1a] z-10 lg:w-[500px] h-fit xl:w-[750px] w-full lg:-mr-28  xl:-mr-36 -mt-3 sm:-mt-10 lg:-mt-0 xl:p-10 p-4 lg:rounded-b-xl lg:rounded-tl-xl rounded-2xl lg:rounded-none">
          <h1 className="text-white mb-6 text-center xl:text-left text-3xl font-medium xl:text-4xl">Your Security is Our <span className="text-primary">Top Priority</span></h1>
          <p className="font-light  text-neutral-300 text-center xl:text-left mb-6">At Yourbank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
        </div>

        <div className=" flex">
          <img
            src={photo}
            alt=""
            className="rounded-xl 2xl:rounded-2xl  w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
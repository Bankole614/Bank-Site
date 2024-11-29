import photo from '../Assets/career-hero.jpg'

const HeroSection = () => {
  return (
    <div className='container  pt-28 pb-14'>
      <div className='flex flex-col-reverse lg:flex-row bg-[#202020] justify-between xl:p-8 p-4 rounded-2xl'>
        <div className="flex flex-col items-center xl:items-start bg-[#1a1a1a] z-10 lg:w-[500px] h-fit xl:w-[750px] w-full lg:-mr-28  xl:-mr-36 -mt-3 sm:-mt-10 lg:-mt-0 xl:p-10 p-4 lg:rounded-b-xl lg:rounded-tl-xl rounded-2xl lg:rounded-none">
          <h1 className="text-white mb-6 text-center xl:text-left text-3xl font-medium xl:text-4xl">Welcome to <span className="text-primary">YourBank</span> Careers!</h1>
          <p className="font-light  text-neutral-300 text-center xl:text-left mb-6">Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
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
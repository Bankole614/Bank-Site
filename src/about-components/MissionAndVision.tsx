import mission from '../Assets/about-mission.jpg'
import vision from '../Assets/about-vision.jpg'


const MissionAndVision = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-primary mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Mission & Vision</p>
        <p className="text-neutral-300 text-center lg:text-left font-light max-w-[900px]">We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.</p>
      </div>

      <div className='flex flex-col space-y-10 lg:space-y-0 xl:-space-y-12 '>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='w-full bg-[#202020] sm:px-8 px-5 sm:pt-8 lg:px-4 lg:pt-4 xl:px-8 xl:pt-8 pt-5  rounded-t-[40px] sm:rounded-t-[80px] lg:rounded-t-[22px] xl:rounded-t-[35px] 2xl:rounded-t-[52px]'>
            <img src={mission} alt="" className='rounded-t-[40px] sm:rounded-t-[80px] lg:rounded-t-[22px] xl:rounded-t-[35px] 2xl:rounded-t-[52px] w-full' />
          </div>
          <div className='lg:border-l border-t lg:border-t-0 h-fit border-primary lg:pl-6 pt-6 lg:pt-0 max-w-4xl text-center lg:text-left'>
            <h3 className='text-white font-medium text-xl mb-2'>Mission</h3>
            <p className='text-neutral-300 font-light'>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-center'>
          <div className='lg:border-r border-t lg:border-t-0 h-fit border-primary lg:pr-6 pt-6 lg:pt-0 max-w-4xl text-center lg:text-left'>
            <h3 className='text-white font-medium text-xl mb-2'>Vision</h3>
            <p className='text-neutral-300 font-light'>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored o individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
          </div>
          <div className='w-full bg-[#202020] sm:px-8 px-5 sm:pt-8 lg:px-4 lg:pt-4 xl:px-8 xl:pt-8 pt-5  rounded-t-[40px] sm:rounded-t-[80px] lg:rounded-t-[22px] xl:rounded-t-[35px] 2xl:rounded-t-[52px]'>
            <img src={vision} alt="" className='rounded-t-[40px] sm:rounded-t-[80px] lg:rounded-t-[22px] xl:rounded-t-[35px] 2xl:rounded-t-[52px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionAndVision
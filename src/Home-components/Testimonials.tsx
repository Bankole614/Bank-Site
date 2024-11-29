import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimony = [
  {
    id: 1,
    content: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
    name: 'Sara T'
  },
  {
    id: 2,
    content: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
    name: 'John D'
  },
  {
    id: 3,
    content: 'I love the convenience of YourBank mobile banking app. It allows me to be on top of my finances and make transactions on the go. The app is very friendly.',
    name: 'Emily G'
  },
  {
    id: 4,
    content: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
    name: 'Carol M'
  },
]

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const Testimonials = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Our <span className="text-primary">Testimonials</span></p>
        <p className="text-neutral-300 text-center lg:text-left font-light max-w-[900px]">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.</p>
      </div>
      <Slider {...settings}>
        {
          Testimony.map((data) => (
            <div key={data.id} className='relative p-5'>
              <div className='p-6 flex flex-col gap-4 text-center'>
                <p className='text-white '>{data.content}</p>
                <p className='text-primary'>{data.name}</p>
              </div>
              <p className='text-primary/20 text-9xl font-serif absolute top-0 right-0'>
                  ,,
                </p>
              
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Testimonials
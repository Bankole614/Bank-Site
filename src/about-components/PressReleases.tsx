import press1 from '../Assets/press1.jpg'
import press2 from '../Assets/press2.png'
import press3 from '../Assets/press3.jpg'
import press4 from '../Assets/press4.jpg'

const Press = [
  {
    id: 1,
    img: press1,
    title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
    date: '06/11/2024',
    description: 'YourBank is pleased to announce the introduction of our new rewards program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
  },
  {
    id: 2,
    img: press2,
    title: 'YourBank Expands Branch Network with Opening of New Location in Chennai',
    date: '12/11/2024',
    description: 'YourBank is excited to announce the grand opening of our newest branch in Chennai city. This expansion is a testament to our continued commitment to serving our customers and providing them with the convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, a personalized approach to banking, and further strengthening our presence in the local community.'
  },
  {
    id: 3,
    img: press3,
    title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
    date: '24/12/2024',
    description: 'YourBank is excited to unveil our new sustainable banking initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.'
  },
  {
    id: 4,
    img: press4,
    title: 'YourBank Launches Sustainable Banking Initiative to Promotr Environmental Responsibility',
    date: '28/12/2024',
    description: 'YourBank is excited to unveil our new sustainable banking initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.'
  },
]


const PressReleases = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-primary mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Press Releases</p>
        <p className="text-neutral-300 text-center lg:text-left font-light">Stay updated with the latest happenings and exciting developments  at YourBank through our press releases.</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          Press.map((data) => (
            <div key={data.id} className='p-3 bg-[#202020] border border-[#393939] flex flex-col gap-5 sm:rounded-t-[35px] lg:rounded-t-[25px] xl:rounded-t-[30px] 2xl:rounded-t-[36px] rounded-t-[20px] sm:rounded-b-2xl lg:rounded-b-[10px] 2xl:rounded-b-[15px] rounded-b-lg'>
              <img src={data.img} alt="" className='sm:rounded-t-[35px] lg:rounded-t-[25px] xl:rounded-t-[30px] 2xl:rounded-t-[36px] rounded-t-[20px] rounded sm:rounded-b-2xl lg:rounded-b-[10px] 2xl:rounded-b-[15px] rounded-b-lg' />
              <div className="flex flex-col gap-3 px-4">
                <h3 className="text-white font-medium text-xl">{data.title}</h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-3">
                  <p className="bg-[#1a1a1a] border border-[#393939] w-fit px-3 py-1 rounded-full text-neutral-300 font-light">Location: India</p>
                  <p className="bg-[#1a1a1a] border border-[#393939] w-fit  px-4 py-1 rounded-full text-neutral-300 font-light">Date: {data.date}</p>
                </div>

                <p className='text-neutral-300 font-light'>{data.description}</p>
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PressReleases
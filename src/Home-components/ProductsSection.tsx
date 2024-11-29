import { FaBriefcase, FaMoneyBillWave, } from "react-icons/fa6"
import { HiArchiveBoxArrowDown } from "react-icons/hi2"

const Products = [
  {
    id: 1,
    icon: <FaBriefcase size={20} />,
    name: 'Checking Accounts',
    description: 'Enjoy easy and convenient access to your funds with ourrange of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.'
  },
  {
    id: 2,
    icon: <HiArchiveBoxArrowDown size={20} />,
    name: 'Savings Accounts',
    description: 'Build your savings with our competitive interest rates and flexible savings account options. Whether you are saving for a specific goal or want to grow your wealth over time, we have the right account for you.'
  },
  {
    id: 3,
    icon: <FaMoneyBillWave size={20} />,
    name: 'Loans and Mortgages',
    description: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.'
  },
]
const ProductsSection = () => {
  return (
    <div>
      <div className="container pb-14">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div>
            <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Our <span className="text-primary">Products</span></p>
            <p className="text-neutral-300 max-w-[650px] text-center lg:text-left font-light">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.</p>
          </div>
          <div className="flex flex-row items-center border-2 border-[#393939] bg-[#1c1c1c] text-sm rounded-full p-2">
            <p className="bg-primary py-2 px-4 rounded-full">For Individuals</p>
            <p className="text-neutral-300 py-2 px-4">For Business</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          {
            Products.map((item) => (
              <div key={item.id} className={`px-5 py-5 lg:py-0 flex flex-col items-center border-[#393939] ${item.id % 3 === 0? 'border-none' : 'border-b lg:border-b-0 lg:border-r'}`}>
                <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#292d1f]  to-[#1a1a1a]">
                  <div className="text-primary flex justify-center  h-12 w-12 items-center rounded-full bg-gradient-to-b from-[#46502a]   to-[#1a1a1a]">{item.icon}</div>
                </div>
                <h3 className="text-white font-medium text-xl mb-2">{item.name}</h3>
                <p className="text-neutral-300 font-light ">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default ProductsSection
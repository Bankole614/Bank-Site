import { GiReceiveMoney } from "react-icons/gi"
import { FaHandHoldingDollar, FaBookOpen, FaMoneyBillWave, FaBusinessTime } from "react-icons/fa6"
import { HiHomeModern, HiBuildingOffice2, HiCurrencyDollar} from "react-icons/hi2"


const Individuals = [
  {
    id: 1,
    icon: <FaHandHoldingDollar size={16} />,
    title: 'Managing Personal Finances',
  },
  {
    id: 2,
    icon: <GiReceiveMoney size={16} />,
    title: 'Saving for the Future',
  },
  {
    id: 3,
    icon: <HiHomeModern size={16} />,
    title: 'Home Ownership',
  },
  {
    id: 4,
    icon: <FaBookOpen size={16} />,
    title: 'Education Funding',
  },
]

const Business = [
  {
    id: 1,
    icon: <HiBuildingOffice2 size={16} />,
    title: 'Startups and Entrepreneurs',
  },
  {
    id: 2,
    icon: <FaMoneyBillWave size={16} />,
    title: 'Cash Flow Management',
  },
  {
    id: 3,
    icon: <FaBusinessTime size={16} />,
    title: 'Business Expansion',
  },
  {
    id: 4,
    icon: <HiCurrencyDollar size={16} />,
    title: 'Payment Solutions',
  },
]

const UseCases = () => {
  return (
    <div>
      <div className="container pb-14">
        <div className="mb-10">
          <p className="text-primary mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Use Cases</p>
          <p className="text-neutral-300 text-center lg:text-left font-light">At YourBank, we cater to the diverse needs of the individuals and businesses alike, offering a wide range of financial solutions.</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-2 bg-[#202020] md:p-5 p-3 rounded-xl">
            {Individuals.map((item) => (
                <div key={item.id} className="border bg-[#1a1a1a] border-[#393939] rounded-md py-4 px-3 md:px-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 mb-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#292d1f] to-[#1a1a1a]">
                      <div className="text-primary flex justify-center  h-10 w-10 items-center rounded-full bg-gradient-to-b from-[#46502a] to-[#1a1a1a]">{item.icon}</div>
                    </div>
                    <p className="text-white text-sm md:text-base">{item.title}</p>
                  </div>
                </div>
            ))}
            </div>
            

            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <div>
                <h1 className="text-white text-xl font-medium text-center lg:text-left lg:mb-4 mb-1">For Individuals</h1>
                <p className="text-neutral-300 text-center lg:text-left font-light mt-0">For individuals, our mortgage services pave the way to home ownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financiallly secure future for our customers.</p>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="text-center lg:text-left border-b md:border-b-0 md:border-r border-dashed border-[#393939]  md:pr-8 py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">78%</p>
                  <p className="text-neutral-300 font-light ">Secure Retirement Planning</p>
                </div>

                <div className="text-center lg:text-left border-b md:border-b-0 md:border-r border-dashed border-[#393939] px-10 md:px-8  py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">63%</p>
                  <p className="text-neutral-300 font-light ">Manageable Debt Consolidation</p>
                </div>

                <div className="text-center lg:text-left md:pl-8  py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">91%</p>
                  <p className="text-neutral-300 font-light">Reducing Financial Burdens</p>
                </div>
              </div>

              <div>
                <button className="text-white bg-[#202020] border border-[#393939] py-2 px-4 rounded-full">Learn More</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <div>
                <h1 className="text-white text-xl text-center font-medium lg:text-left lg:mb-4 mb-1">For Business</h1>
                <p className="text-neutral-300 text-center lg:text-left font-light">For individuals, we empower  growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is comitted to providing the right tools and support to achieve them.</p>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="text-center lg:text-left border-b md:border-b-0 md:border-r border-dashed border-[#393939]  md:pr-8 py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">65%</p>
                  <p className="text-neutral-300 font-light ">Cash Flow Management</p>
                </div>

                <div className="text-center lg:text-left border-b md:border-b-0 md:border-r border-dashed border-[#393939] px-10 md:px-8  py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">70%</p>
                  <p className="text-neutral-300 font-light ">Drive Business Expansion</p>
                </div>

                <div className="text-center lg:text-left md:pl-8  py-4 sm:py-2">
                  <p className="text-primary font-semibold text-2xl">45%</p>
                  <p className="text-neutral-300 font-light">Streamline Payroll Processing</p>
                </div>
              </div>

              <div>
                <button className="text-white bg-[#202020] border border-[#393939] py-2 px-4 rounded-full">Learn More</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-[#202020] md:p-5 p-3 rounded-xl">
            {Business.map((item) => (
                <div key={item.id} className="border bg-[#1a1a1a] border-[#393939] rounded-md py-4 px-3 md:px-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 mb-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#292d1f] to-[#1a1a1a]">
                      <div className="text-primary flex justify-center  h-10 w-10 items-center rounded-full bg-gradient-to-b from-[#46502a] to-[#1a1a1a]">{item.icon}</div>
                    </div>
                    <p className="text-white text-sm md:text-base">{item.title}</p>
                  </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default UseCases
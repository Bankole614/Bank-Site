import { GiBriefcase } from "react-icons/gi"
import { MdHealthAndSafety } from "react-icons/md"
import { FaScaleBalanced, FaMoneyBills } from "react-icons/fa6"

const Benefit = [
  {
    id: 1,
    icon: <FaMoneyBills size={20} />,
    title: 'Competitive Compensation',
    description: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.'
  },
  {
    id: 2,
    icon: <MdHealthAndSafety size={20} />,
    title: 'Health and Wellness',
    description: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.'
  },
  {
    id: 3,
    icon: <GiBriefcase size={20} />,
    title: 'Retirement Planning',
    description: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.'
  },
  {
    id: 4,
    icon: <FaScaleBalanced size={20} />,
    title: 'Work-Life Balance',
    description: 'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.'
  },
]
const Benefits = () => {
  return (
    <div className="container pb-14">
      <div>
        <div className="mb-10">
          <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Our <span className="text-primary">Benefits</span></p>
          <p className="text-neutral-300 max-w-[1000px] text-center lg:text-left font-light">At YourBank, we value our employees and are dedicated to their well-being ans success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {
            Benefit.map((data) => (
              <div key={data.id} className="flex flex-col gap-4 p-6 bg-[#202020] rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg">
                <div className="flex items-center gap-3 ">
                  <div className="w-16 h-16 p-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#292d1f] to-[#202020]">
                    <div className="text-primary flex justify-center  h-12 w-12 items-center rounded-full bg-gradient-to-b from-[#46502a]  to-[#202020]">{data.icon}</div>
                  </div>

                  <p className="text-white font-medium md:text-xl text-lg">{data.title}</p>
                </div>
                <p className="text-neutral-300 font-light ">{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Benefits
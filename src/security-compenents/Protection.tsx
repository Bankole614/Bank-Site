import { SiAuthelia } from "react-icons/si"
import { MdSecurity } from "react-icons/md"
import { BsDatabaseFillLock } from "react-icons/bs"
import { PiEyesFill } from "react-icons/pi"


const Protect = [
  {
    id: 1,
    icon: <MdSecurity size={20} />,
    title: 'Secure Online Banking Platform',
    description: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
  },
  {
    id: 2,
    icon: <BsDatabaseFillLock size={20} />,
    title: 'Multi-Factor Authentication',
    description: 'To enhance the security of our online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
  },
  {
    id: 3,
    icon: <PiEyesFill size={20} />,
    title: 'Fraud Monitoring',
    description: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
  },
  {
    id: 4,
    icon: <SiAuthelia size={20} />,
    title: 'Secure Mobile Banking',
    description: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
  },
]

const Protection = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">How We <span className="text-primary">Protect You</span></p>
        <p className="text-neutral-300 max-w-[1000px] text-center lg:text-left font-light">At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#202020] p-6 rounded-xl">
          {
            Protect.map((data) => (
              <div key={data.id} className="flex flex-col gap-4 md:p-6 p-3 border border-[#393939] rounded-xl">
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
  )
}

export default Protection
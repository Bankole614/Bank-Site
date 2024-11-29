import { FiArrowUpRight } from "react-icons/fi"


const Feature = [
  {
    id: 1,
    title: '24/7 Account Access',
    description: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'
  },
  {
    id: 3,
    title: 'Secure Transactions',
    description: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'
  },
  {
    id: 4,
    title: 'Bill Pay and Transfers',
    description: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'
  },
]


const Features = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Our <span className="text-primary">Features</span></p>
        <p className="text-neutral-300 text-center lg:text-left font-light max-w-[900px]">Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="  bg-[#202020] lg:p-8 p-4 h-fit rounded-lg">
          <div className="flex lg:flex-col flex-row items-center md:justify-center gap-5  max-w-full overflow-x-auto ">
          <button className="text-primary bg-[#1a1a1a] border border-[#393939] py-2 px-4 min-w-48 rounded-full">Online Banking</button>
        <button className="text-white bg-[#1a1a1a] border border-[#393939] py-2 px-4 min-w-48 rounded-full">Financial Tools</button>
        <button className="text-white bg-[#1a1a1a] border border-[#393939] py-2 px-4 min-w-48 rounded-full">Customer Support</button>
          </div>
        

        </div>

        <div className="">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {
            Feature.map((item) => (
              <div key={item.id} className="border border-[#393939] xl:p-8 p-5 rounded-lg bg-[#202020]">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-xl mb-2">{item.title}</h3>
                  <FiArrowUpRight size={20} className="text-primary" />
                </div>
                <p className="text-neutral-300 font-light ">{item.description}</p>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features



const Questions = [
  {
    id: 1,
    title: 'How do I open an account with YourBank?',
    description: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
  },
  {
    id: 2,
    title: 'What documents do I need to provide to apply for a loan?',
    description: 'The documents required for a loan applicaton may vary depending on the type of loan you are applying for. Generally, you will need to provide identification  documents (such as a passport or driver\'s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.'
  },
  {
    id: 3,
    title: 'How can I access my accounts online?',
    description: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is avaible to guide you.'
  },
  {
    id: 4,
    title: 'Are my transactions and personal information secure?',
    description: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure  that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.'
  },
]


const Faq = () => {
  return (
    <div className="container pb-14">
      <div className="mb-10">
        <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Frequently Asked <span className="text-primary">Questions</span></p>
        <p className="text-neutral-300 text-center lg:text-left font-light">Still have any questions? Contact out team via support@yourbank.com</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {
            Questions.map((item) => (
              <div key={item.id} className="border border-[#393939] xl:p-8 p-5 rounded-lg bg-[#202020]">
                <h3 className="text-white font-medium text-xl mb-3 border-b border-[#393939] pb-3">{item.title}</h3>
                <p className="text-neutral-300 font-light ">{item.description}</p>
              </div>
            ))
          }
          </div>
    </div>
  )
}

export default Faq
import { BsBriefcaseFill } from "react-icons/bs"

const Job = [
  {
    id: 1,
    title: 'Relationship Manager',
    department: 'Retail Banking',
    about: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will be proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
    req1: "Bachelor's degree in Business, Finance, or a related field",
    req2: 'Minimum of 3 years experience in sales or relationship management in the banking industry',
    req3: "Proven track record of meeting and exceeding sales targets",
    req4: "Excellent interpersonal and negotiation skills",
    req5: "strong knowledge of banking products and services",
  },
  {
    id: 2,
    title: 'Risk Analyst',
    department: 'Risk Management',
    about: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk managment principles.',
    req1: "Bachelor's degree in Finance, Economics, or a related field",
    req2: 'Minimum of 2 years experience in risk management or a similar role',
    req3: "Proficiency in risk analysis tools and techniques",
    req4: "Strong analytical and problem-solving skills",
    req5: "Knowledge of regulatory requirements and industry best practices",
  },
  {
    id: 3,
    title: 'IT Security Specialist',
    department: 'Information Technology',
    about: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
    req1: "Bachelor's degree in Computer Science, Information Security, or a related field",
    req2: 'Minimum of 5 years experience in IT Security or a similar role',
    req3: "In-depth knowledge of network security protocols and technologies",
    req4: "Familiarity with regulatory frameworks such as PCI, DSS and GDPR",
    req5: "Professional certifications such as CISSP or CISM are preferred",
  },
  {
    id: 4,
    title: 'Relationship Manager',
    department: 'Retail Banking',
    about: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will be proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
    req1: "Bachelor's degree in Business, Finance, or a related field",
    req2: 'Minimum of 3 years experience in sales or relationship management in the banking industry',
    req3: "Proven track record of meeting and exceeding sales targets",
    req4: "Excellent interpersonal and negotiation skills",
    req5: "strong knowledge of banking products and services",
  },
]


const JobOpenings = () => {
  return (
    <div className="container pb-14">
      <div>
        <div className="mb-10">
          <p className="text-primary mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Job Openings</p>
          <p className="text-neutral-300 max-w-[1000px] text-center lg:text-left font-light">Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            Job.map((data) => (
              <div key={data.id} className="bg-[#202020] border border-[#393939] flex flex-col gap-6 sm:p-6 p-4 rounded-md">
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium text-xl">{data.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <p className="bg-[#1a1a1a] border border-[#393939] w-fit px-3 py-1 rounded-full text-neutral-300 font-light">Location: India</p>
                    <p className="bg-[#1a1a1a] border border-[#393939] w-fit  px-4 py-1 rounded-full text-neutral-300 font-light">Department: {data.department}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-white font-medium text-lg">About This Job</p>
                  <p className="font-light text-neutral-300">{data.about}</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <p className="text-white font-medium text-lg">Requirements and Qualifications</p>
                  <div className="flex items-center gap-2">
                    <BsBriefcaseFill size={16} className="text-neutral-300" />
                    <p className="font-light text-neutral-300">{data.req1}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsBriefcaseFill size={16} className="text-neutral-300" />
                    <p className="font-light text-neutral-300">{data.req2}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsBriefcaseFill size={16} className="text-neutral-300" />
                    <p className="font-light text-neutral-300">{data.req3}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsBriefcaseFill size={16} className="text-neutral-300" />
                    <p className="font-light text-neutral-300">{data.req4}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsBriefcaseFill size={16} className="text-neutral-300" />
                    <p className="font-light text-neutral-300">{data.req5}</p>
                  </div>
                  
                </div>

                <div>
                  <button className="px-4 py-2 bg-primary rounded-full">Apply Now</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default JobOpenings
import Logo from './Assets/Logo.png'
import { Link } from 'react-router-dom';
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6';

const navItems = [

  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Careers',
    path: '/careers'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Security',
    path: '/security'
  },
  
]


const Footer = () => {
  return (
    <div className='container'>
      <div className='flex flex-col items-center justify-center gap-6 pt-6 pb-4'>
        <div className='flex gap-1.5 items-center'>
          <img className='h-8' src={Logo} alt="" />
          <p className='text-xl font-medium text-white'>YourBank</p>
        </div>

        <div className="flex gap-4">
          {
            navItems.map((item, index) => (
              <ul key={index}>
                <Link to={item.path}>
                  <li className='hover:underline text-neutral-300 text-sm'>{item.name}</li>
                </Link>
                
              </ul>
            ))
          }
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center md:gap-6 gap-2 border-y border-[#393939] w-full py-4'>
          <div className='flex items-center gap-1.5'>
            <IoMail className='text-primary'/>
            <p className='text-neutral-300 text-sm'>hello@skillbridge.com</p>
          </div>
          <div className='flex items-center gap-1.5'>
            <IoCall className='text-primary'/>
            <p className='text-neutral-300 text-sm'>+91 91813 23 2309</p>
          </div>
          <div className='flex items-center gap-1.5'>
            <IoLocationSharp className='text-primary'/>
            <p className='text-neutral-300 text-sm'>Somewhere in the World</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center justify-between w-full border border-[#393939] bg-[#1a1a1a] md:rounded-full rounded-lg md:p-2 p-4 relative md:mt-0 mt-4'>
          <div className="flex gap-2 absolute md:static -top-4">
            <FaFacebook className="w-8 h-8 p-1 rounded-full bg-primary cursor-pointer" />
            <FaSquareXTwitter className="w-8 h-8 p-1 rounded-full bg-primary cursor-pointer" />
            <FaLinkedin className="w-8 h-8 p-1 rounded-full bg-primary cursor-pointer" />
          </div>

          <div className='pt-4 md:pt-0'>
            <p className='md:text-sm text-neutral-300 font-light'>YourBank. All Rights Reserved</p>
          </div>

          <div>
            <p className='md:text-sm text-neutral-300 font-light'>Privacy Policy | Terms of service</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
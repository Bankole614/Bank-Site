import  { useState } from 'react';
import Logo from './Assets/Logo.png'
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';


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

const linkClass = " px-4 mx-1 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-full transition-all duration-300";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

const { pathname } = useLocation();

  return (
    <>
      
      <nav className="fixed top-0 left-0 right-0 bg-[#1a1a1a] text-white py-4  z-50">
        <div className="container mx-auto">
          <div className="flex justify-between bg-[#202020] items-center border rounded-full py-3 px-4 border-[#393939]">
            {/* Logo */}
            <div className='flex gap-1.5 items-center'>
              <img className='h-8' src={Logo} alt="" />
              <p className='text-xl font-medium'>YourBank</p>
            </div>

            {/* Desktop Navigation */}
            <button onClick={toggleMenu} className=" lg:hidden text-black bg-[#CAFF33] py-2 px-4 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                  </button>

                  <ul className="hidden mx-auto lg:flex">
                    {
                      navItems.map((item, index) => (
                        <NavLinks key={index} item={item} />
                      ))
                    }
                  </ul>
                
                  <div className="hidden lg:flex items-center gap-2">
                    <Link to='/signup'>
                      <p className= {`text-gray-200 border border-[#393939] px-4 py-2 transition-all duration-300 hover:bg-neutral-700 active:bg-neutral-600 rounded-full ${pathname === '/signup' ? "bg-neutral-700 text-white font-semibold" : "text-gray-200"}`}>Sign Up</p>
                    </Link>
                    <Link to='/login'>
                      <p className={`bg-[#CAFF33] text-black px-4 py-2 transition-all duration-300 rounded-full hover:bg-opacity-85  ${pathname === '/login' ? "bg-opacity-70 font-semibold" : "text-black"}`}>Login</p>
                    </Link>
                    
                    
                  </div>

            <div
                className={`fixed inset-y-0 right-0 z-50 w-56 bg-[#1c1c1c]  transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300  lg:hidden`}>
                <div className="flex justify-end items-center p-3">
                    <button onClick={() => toggleMenu()} className="text-[#CAFF33]">
                        <svg
                            className="w-6 h-6 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>

                <ul className="p-4 text-white space-y-4">
                  {
                    navItems.map((item, index) => (
                      
                      <li key={index}>
                        <a className="block font-medium text-lg px-4 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-full transition-all duration-300 w-fit " href={item.path} onClick={() => toggleMenu()}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul>
                <div className="p-4 flex gap-3 flex-col">
                 <button className="text-white border border-[#393939] text-lg font-medium px-4 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-full transition-all duration-300">
                  <a href="/signup" className=''>Sign up</a>
                  </button>
                  <button className=" bg-primary text-black px-4 py-2 rounded-full text-lg font-medium hover:bg-opacity-80 active:bg-opacity-60">
                    <a href="/login"> Log In</a>
                   
                  </button>
                  
                </div>
                
            </div>
          </div>
          {isOpen && (
                <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>
            )}
        </div>
      </nav>
    </>
  );
};

type navlinkprops = {
  item: {
    name: string;
    path: string;
  };
};
function NavLinks({ item }: navlinkprops) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white font-semibold"
          : "text-gray-200",
        linkClass
      )}
    >
      {item.name}
    </Link>
  );
}

export default Navbar;
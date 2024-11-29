import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuArrowRightLeft, LuBitcoin } from "react-icons/lu";
import { FaPlus, FaDollarSign, FaEuroSign, } from "react-icons/fa6";
import { FaPoundSign } from "react-icons/fa";
import CountryFlag from 'react-country-flag';
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className=" lg:pt-36 pt-28 pb-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:gap-6 lg:grid-cols-2  justify-between">
          <div className="flex flex-col lg:items-start items-center">
            <div className="flex mb-2">
            <div className="flex gap-2 py-2 px-4 w-fit text-white text-sm font-light items-center bg-[#262626] rounded-full">
              <RiVerifiedBadgeFill size={20} className="text-[#CAFF33]" />
              <p>No LLC Required, No Credit Check.</p>
            </div>
            </div>
            
            <div className="flex flex-col items-center lg:items-start max-w-[600px]">
              <h1 className="text-white mb-6 text-center lg:text-left text-3xl font-medium md:text-4xl ">Welcome to YourBank Empowering Your <span className="text-primary">Financial Journey</span></h1>
              <p className="font-light  text-neutral-300  text-center lg:text-left mb-6">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
              <Link to='/signup'>
                <button className="bg-primary w-fit text-sm rounded-full px-6 py-3">Open Account</button>
              </Link>
            </div>
          </div>
          <div>
          <div className="relative border border-[#393939] rounded-md xl:mx-16 mx-4 pt-7 pb-4 px-4">
            <div className="bg-[#26291d] absolute -top-7 sm:-left-12 -left-7 flex items-center gap-1.5 p-2 rounded-md w-fit">
              <FaPlus className="bg-[#CAFF33] h-7 w-7 p-2 rounded-full text-black" />
              <div className="text-white">
                <p className="text-sm font-medium">
                  +$5000.00
                </p>
                <p className="text-xs font-light">Monthly Income</p>
              </div>
            </div>
            <div className="">
              <h3 className="text-white mb-4">Your Transactions</h3>
              <div className="relative space-y-4 ">
                <div className=" absolute z-30 left-0 bg-[#202020] w-full flex items-center justify-between gap-2 sm:px-4 px-2 py-2 rounded-lg border border-[#393939] text-sm sm:text-base">
                  <div className="items-center gap-1.5 flex text-white ">
                    <LuArrowRightLeft  className="bg-primary h-7 w-7 p-2 rounded-full text-black" />
                    <div className="">
                    <p className="text-sm">Transactions</p>
                    <p>Joel Kenley</p>
                    </div>
                  </div>
                  <p className="text-white">-$68.00</p>
                </div>

                <div className="absolute z-20 sm:left-[22px] left-[14px] lg:left-[18px] sm:w-11/12 w-[90%] bg-[#202020]/60  top-7 flex items-center gap-2 justify-between sm:px-4 px-2 py-2 text-white/60 rounded-lg border border-[#393939]/60  text-sm sm:text-base">
                  <div className="items-center gap-1.5 flex ">
                    <LuArrowRightLeft  className="bg-primary/60 h-7 w-7 p-2 rounded-full text-black" />
                    <div >
                    <p className="text-sm">Transactions</p>
                    <p>Mark Smith</p>
                    </div>
                  </div>
                  <p>-$68.00</p>
                </div>

                <div className="absolute z-10 sm:left-[44px] left-7 lg:left-[36px] sm:w-10/12 w-[80%]  top-[72px] flex items-center bg-[#202020]/30 gap-2 overflow-hidden justify-between text-white/30 sm:px-4 px-2 py-2 rounded-lg border border-[#393939]/30 text-sm sm:text-base">
                  <div className="items-center gap-1.5 flex ">
                    <LuArrowRightLeft  className="bg-primary/30 h-7 w-7 p-2 rounded-full text-black" />
                    <div>
                    <p className="text-sm">Transactions</p>
                    <p>Lenen Roy</p>
                    </div>
                  </div>
                  <p>-$68.00</p>
                </div>
              </div>
            </div>
            <div className="mt-48 mb-6">
              <div className="text-white mb-4">
                <p>Money Exchange</p>
              </div>
              <div className="flex flex-col bg-[#202020] text-white border border-[#393939] rounded-lg">
                <div className="flex border-b border-[#393939]">
                  <div className="pl-4 py-2 w-1/2">
                    <div className="flex items-center gap-2 mb-1">
                      <CountryFlag countryCode="IN" svg className="text-4xl" />
                      <p>INR</p>
                    </div>
                    <p className="text-gray-300 font-light text-sm">Indian Rupees</p>
                  </div>

                  <div className="pl-4 py-2 w-1/2 border-[#393939] border-l">
                    <div className="flex items-center gap-2 mb-1">
                      <CountryFlag countryCode="US" svg className="text-4xl" />
                      <p>USD</p>
                    </div>
                    <p className="text-gray-300 font-light text-sm">United States Dollar</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="pl-4 py-3 w-1/2">
                    <p >5,000</p>
                  </div>

                  <div className="pl-4 py-3 w-1/2 border-[#393939] border-l">
                    <p >12.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#26291d] text-primary text-center rounded-full cursor-pointer">
              <p className="text-sm py-2">Exchange</p>
            </div>
            
          </div>
          <div className="flex justify-end">
            <div className="flex bg-[#26291d] gap-5 items-center w-fit p-2 rounded-full mt-4">
              <p className="text-white pl-4">Supported Currency</p>
              <div className="text-primary flex bg-neutral-900 p-2 rounded-full gap-2">
                <FaDollarSign className="w-6 h-6 p-1.5 rounded-full bg-neutral-800" />
                <FaEuroSign className="w-6 h-6 p-1.5 rounded-full bg-neutral-800" />
                <FaPoundSign className="w-6 h-6 p-1.5 rounded-full bg-neutral-800" />
                <LuBitcoin className="w-6 h-6 p-1.5 rounded-full bg-neutral-800" />
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection
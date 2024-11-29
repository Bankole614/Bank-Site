import { IoEye } from "react-icons/io5"
import { Link } from "react-router-dom"
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa6"

const Icons = [
  {
    id: 1,
    icon: <FaFacebook size={16} />
  },
  {
    id: 2,
    icon: <FaGoogle size={16} />
  },
  {
    id: 3,
    icon: <FaApple size={16} />
  },
]


const Login = () => {
  return (
    <div className="container pt-28 pb-14">
      <div className="bg-[#202020] border border-[#393939] rounded-lg flex flex-col gap-6 items-center justify-center px-4 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-primary font-semibold text-2xl">Log In</h2>
          <p className="text-neutral-300 font-light text-center ">Welcome back! Please login to access your account.</p>
        </div>
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <div className="w-full">
              <input type="email" required className="md:w-64 w-full text-sm text-neutral-300 font-light bg-[#1a1a1a] outline-none border border-[#393939] rounded-full p-2 placeholder-neutral-600" placeholder="Enter Your Email" />
            </div>
            <div className="relative">
              <IoEye className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-600" />
              <input required type="password"  className="md:w-64 w-full text-sm text-neutral-300 font-light bg-[#1a1a1a] outline-none border border-[#393939] rounded-full p-2 placeholder-neutral-600" placeholder="Enter Your Password" />
            </div>
          </div>

        <div className="flex flex-col gap-2">
          <p className="flex justify-center text-neutral-300 hover:underline font-light mb-2">Forgot Password?</p>
          <button className="bg-primary py-2 rounded-full">Login</button>
          <p className="text-neutral-300 font-light text-center">Don't have an account? 
            <Link to='/signup'><span className=" hover:underline"> Signup</span></Link>
          </p>

          <div className="relative flex flex-col my-4  ">
            <p className="h-px border-b border-neutral-300"></p>
          <p className="text-neutral-300 font-light absolute top-1/2 right-[42px] -translate-y-1/2 px-2 text-center bg-[#202020]">Or continue with</p>
          </div>

          

          <div className="flex justify-center gap-2">
            {
              Icons.map((data) => (
                <div key={data.id}>
                  <div className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#292d1f] to-[#202020]">
                  <div className="text-primary flex justify-center  h-8 w-8 items-center rounded-full bg-gradient-to-b from-[#46502a] to-[#202020]">{data.icon}</div>
                </div>
                </div>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login

const Start = () => {
  return (
    <div className="container pb-14">
      <div className="bg-[#202020] flex justify-between items-center md:p-10 p-5 flex-col lg:flex-row gap-6 mb-10 rounded-lg">
        <div >
          <p className="text-white mb-2 text-center lg:text-left  font-medium text-2xl">Start your financial journey with <span className="text-primary">YourBank today!</span></p>
          <p className="text-neutral-300 text-center lg:text-left font-light max-w-[680px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis architecto dolorum ut ipsam, veritatis ea repellat quidem maxime qui suscipit laudantium est perferendis et odio?</p>
        </div>
        <div>
        <button className="bg-primary w-fit text-sm rounded-full px-6 py-3">Open Account</button>
        </div>
      </div>
    </div>
  )
}

export default Start
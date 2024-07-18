export default function Welcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D3B66] font-abril">
      <div className="flex justify-around items-center w-[90%] h-[90%]">
        <div className="flex-1">
          <h2 className="text-2xl text-white">Welcome to Wolfy.space!</h2>
          <br />
          <h2 className="text-2xl text-white">
            Customize your profile, share posts, play games, and connect with friends in the ultimate social network experience
          </h2>
          <div className="w-[40vw] min-h-fit bg-[#155B9D] rounded-[10px] p-5 shadow-md flex flex-col items-center mt-10">
            <div className="flex justify-between w-[50%]">
              <div className="flex flex-col items-center">
                <span className="text-2xl text-white cursor-pointer p-2.5 transition-colors duration-300 hover:text-[#cce7ff]">
                  Sign In
                </span>
                <div className="w-[70px] h-[8px] self-center bg-white rounded-md transition-colors duration-300 hover:bg-[#67a6c3]" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl text-white cursor-pointer p-2.5 transition-colors duration-300 hover:text-[#cce7ff]">
                  Sign Up
                </span>
                <div className="w-[70px] h-[8px] self-center bg-white rounded-md transition-colors duration-300 hover:bg-[#67a6c3]" />
              </div>
            </div>
            <div className="flex flex-col items-center w-[80%] mt-8">
              <input
                type="text"
                placeholder="Login"
                className="p-2.5 my-2.5 border-none rounded-md text-lg h-[45px] w-[100%]"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2.5 my-2.5 border-none rounded-md text-lg h-[45px] w-[100%]"
              />
              <button className="w-[100px] p-2.5 mt-5 border-none rounded-md self-end bg-[#89CFF0] text-white  text-lg cursor-pointer transition-colors duration-300 hover:bg-[#67a6c3]">
                Go!
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src='/logo.png' alt="Logo" width={544} height={674} />
        </div>
      </div>
    </div>
  );
}

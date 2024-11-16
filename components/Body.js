import picture from "../src/assets/fb.png";
import MobileForm from "./MobileForm";

const Body = () => {
  return (
    <>
      <div className="container max-w-full bg-[#f0f2f5] pt-[72px] pb-28 h-[96vh] hidden lg:block">
        <div className="flex justify-center items-start mt-24">
          <div className="w-[36rem]">
            <img src={picture} className="h-[106px] -ml-6 -mb-3" alt="" />
            <p className="text-3xl">
              GSbook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="bg-white py-5 pb-6 px-3 w-96 rounded-lg shadow-[-2px_2px_10px_0px_#beb9b9] relative">
              <div className="flex flex-col">
                <form action="#" method="post">
                  <input
                    type="email"
                    className="w-full p-4 rounded-md border-[1px] focus:outline-none focus:border-sky-400 focus:shadow-[0px_0px_3px_0px] focus:shadow-sky-400 border-slate-300 placeholder:text-[#a59f9f] font-medium text-sm pl-3"
                    name="email"
                    id=""
                    placeholder="Email address or phone number
                    ber"
                  />
                  <input
                    type="password"
                    className="w-full mt-2 p-4 rounded-md border-[1px] focus:outline-none focus:border-sky-400 focus:shadow-[0px_0px_3px_0px] focus:shadow-sky-400 border-slate-300 placeholder:text-[#a59f9f] font-medium text-sm pl-3"
                    name="password"
                    id=""
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="bg-[#1877f2] text-white text-lg font-bold p-1 rounded-[5px] w-full h-12 mx-auto mt-3"
                  >
                    Log in
                  </button>
                </form>
              </div>
              <div className="flex justify-center">
                <a className="text-[#216fdb] text-sm mt-3 font-normal hover:underline">
                  Forgotten password?
                </a>
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex justify-center items-baseline">
                  <div className="w-full border-t-2 border-[#e9e9e9] h-[0.25px]"></div>
                  <div className="w-full block border-t-2 border-[#e9e9e9] h-[0.25px]"></div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a className="bg-[#42b72a] hover:bg-[#3a9f26] hover:cursor-pointer text-white text-base mt-3 font-bold py-3 px-5 rounded-[5px]">
                  Create New Account
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-center mt-6 text-sm">
                <span className="font-bold">Create a Page</span> for a
                celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile form component */}
      <MobileForm />
    </>
  );
};

export default Body;

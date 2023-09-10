const MobileForm = () => {
  return (
    <div class="container max-w-8xl sm:max-w-md mx-auto lg:hidden">
      <div class="flex flex-col px-4">
        <form action="#" method="post">
          <input
            type="email"
            class="w-full bg-[#f5f6f7] p-3 rounded-md border-b-[1px] border-r-[1px] border-l-[1px] border-slate-300 placeholder:text-[#696767] font-normal text-sm pl-3"
            name="email"
            id=""
            placeholder="Mobile number or email address"
          />
          <input
            type="password"
            class="w-full mt-2 bg-[#f5f6f7] p-3 rounded-md border-b-[1px] border-r-[1px] border-l-[1px] border-slate-300 placeholder:text-[#757575] font-normal text-sm pl-3"
            name="email"
            id=""
            placeholder="Password"
          />
          <button
            type="submit"
            class="bg-[#1877f2] text-white text-base font-bold p-1 rounded-[4px] w-full h-10 mx-auto mt-3"
          >
            Log In
          </button>
        </form>
      </div>
      <div class="flex justify-center">
        <a  class="text-[#216fdb] text-sm mt-3 font-normal">
          Forgotten password?
        </a>
      </div>
      <div class="flex flex-col mt-3">
        <div class="flex justify-center items-baseline">
          <div class="w-full border-t-2 border-[#ccd0d5] ml-5 h-1"></div>
          <div class="">
            <p class="text-sm mx-4">or</p>
          </div>
          <div class="w-full block border-t-2 border-[#ccd0d5] mr-5 h-1"></div>
        </div>
      </div>
      <div class="flex justify-center mt-1">
        <a
          
          class="bg-[#00a400] text-white text-sm mt-3 font-bold py-2 px-4 rounded-[4px]"
        >
          Create New Account
        </a>
      </div>
    </div>
  );
};


export default MobileForm;

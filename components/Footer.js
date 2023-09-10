import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-[102px] lg:mt-0">
      <div className="container max-w-8xl mx-auto lg:hidden">
        <div className="flex justify-around pl-4 pr-4 p-[6px]">
          <div className="text-center text-xs w-full">
            <ul>
              <li className="pb-[2px] text-[#90949c] font-bold font-[Sans-serif]">
                English (UK)
              </li>
              <li className="pb-[2px] text-[#576b95]">ଓଡ଼ିଆ</li>
              <li className="pb-[2px] text-[#576b95]">اردو</li>
              <li className="pb-[2px] text-[#576b95]">ગુજરાતી</li>
            </ul>
          </div>
          <div className="text-center text-xs w-full">
            <ul>
              <li className="pb-[2px] text-[#576b95]">हिन्दी</li>
              <li className="pb-[2px] text-[#576b95]">বাংলা</li>
              <li className="pb-[2px] text-[#576b95]">ਪੰਜਾਬੀ</li>
              <li className="pb-[2px] text-[#576b95]">
                <a className="hover:cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="font-thin rounded-[4px] border-[1px] border-[#3b5998] p-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <ul className="flex justify-around font-medium items-start">
            <li className="text-[#8a8d91] text-[10px] mt-[2px]">About</li>
            <li className="text-black ml-[5px] mr-[5px] text-[10px]">.</li>
            <li className="text-[#8a8d91] text-[10px] mt-[2px]">Help</li>
            <li className="text-black ml-[5px] mr-[5px] text-[10px]">.</li>
            <li className="text-[#8a8d91] text-[10px] mt-[2px]">More</li>
          </ul>
        </div>
        <p className="text-[#808080] text-center mt-[10px] text-xs">
          Meta <FontAwesomeIcon icon={faCopyright} className="font-thin" />
          {moment().format("yyyy")}
        </p>
      </div>

      <div className="container max-w-8xl mx-auto py-3 hidden lg:block">
        <div className="flex justify-center w-9/12">
          <ul className="flex flex-row items-center">
            <li className="py-2 px-2 text-[#90949c] font-medium text-xs">
              English (UK)
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">हिन्दी</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">ଓଡ଼ିଆ</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">বাংলা</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">বাংলা</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">ગુજરાતી</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">मराठी</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">தமிழ்</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">తెలుగు</a>
            </li>
            <li className="py-2 px-2 text-[#90949c] text-xs">
              <a className="hover:underline">മലയാളം</a>
            </li>
            <li className="py-2 px-2">
              <a className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-sm font-thin bg-[#f5f6f7] rounded-[2px] border-[1px] border-[#ccd0d5] py-1 px-3"
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="w-7/12 mx-auto" />
        <div className="flex justify-center ml-4 w-11/12">
          <ul className="flex flex-row items-center">
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Signup</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Log in</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Messenger</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Facebook Lite</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Watch</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Places</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Games</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Marketplace</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Meta Pay</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Oculus</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Portal</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Instagram</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Bulletin</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Fundraisers</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center -mt-3 ml-8 w-11/12">
          <ul className="flex flex-row items-center">
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Services</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Voting Information Centre</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Privacy Policy</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Privacy Centre</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Groups</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">About</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Create ad</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Create Page</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Developers</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Careers</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Cookies</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">AdChoices</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center -mt-3 -ml-9 lg:w-[45%] xl:w-3/5">
          <ul className="flex flex-row items-center">
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Terms</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Help</a>
            </li>
            <li className="p-2 text-[#8a8d91] text-xs">
              <a className="hover:underline">Contact uploading and non-users</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-4 lg:w-[18%] xl:w-5/12 ml-2">
          <p className="text-[#808080] text-center mt-[10px] text-xs">
            Meta
            <FontAwesomeIcon icon={faCopyright} className="mx-1" />
            {moment().format("yyyy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

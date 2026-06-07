import { ChevronDown, Menu, Search } from "lucide-react";
import { ReactComponent as LogoIcon } from "./logo/Copy of Arogya_Point.svg";
import bellIcon from "./logo/Vector.png";

export default function Header({ toggleSidebar }) {
  return (
    <div className="w-full gap-6 bg-gradient-to-r bg-[#0C3D20] pr-4 flex flex-wrap items-center justify-between py-3 md:py-0 md:h-24">
      {/* Left */}

      <div className="flex items-center  text-white">
        <LogoIcon className="h-10 w-auto md:h-[125px] md:w-[240px]" />
      </div>

      {/* Search */}
      <div className=" md:flex flex-1 max-w-4xl ml-4 md:ml-24 mb-7">
        <div className="bg-white rounded-md h-12 flex items-center w-full pl-4">
          <input
            type="text"
            placeholder="Search Products, Categories, Brands and More"
            className="flex-1 outline-none text-gray-700"
          />
          <div className="bg-[#E9ECEF] text-white rounded-r-md p-[10px] px-4 border-[1px] border-gray-400">
            <Search className="text-black" size={27} />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 mb-7 mr-4">
        <button className="relative text-white mr-6">
          <img src={bellIcon} alt="Notification" className="h-7 w-7" />
          <span className="absolute -top-1 -right-0.2 h-2 w-2  bg-red-500 rounded-full"></span>
        </button>

        <button className=" border-[1px] border-white text-white px-4 py-2 rounded-lg flex items-center gap-2">
          ADMIN
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
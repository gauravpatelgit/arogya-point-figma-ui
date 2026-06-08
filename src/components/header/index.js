import { Bell, ChevronDown, Menu, Search } from "lucide-react";

type HeaderProps = {
  toggleSidebar: () => void;
};

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-24 bg-gradient-to-r from-[#03150f] via-[#072b1c] to-[#03150f] px-4 lg:px-8 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white"
        >
          <Menu size={28} />
        </button>

        <div className="text-white">
          <h1 className="text-3xl font-light">
            Arogya<span className="font-semibold">Point</span>
          </h1>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-3xl mx-8">
        <div className="bg-white rounded-md h-12 flex items-center w-full px-4">
          <input
            type="text"
            placeholder="Search Products, Categories, Brands and More"
            className="flex-1 outline-none text-gray-700"
          />
          <Search className="text-gray-500" size={20} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative text-white">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="border border-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          ADMIN
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
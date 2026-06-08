import {
  LayoutDashboard,
  Package,
  TicketPercent,
  CirclePlus,
  ClipboardList,
  Users,
  Boxes,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "All Products",
    icon: Package,
    active: true,
  },
  {
    title: "Coupon",
    icon: TicketPercent,
  },
  {
    title: "Add New Product",
    icon: CirclePlus,
  },
  {
    title: "Order List",
    icon: ClipboardList,
  },
  {
    title: "Customer",
    icon: Users,
  },
  {
    title: "Stock List",
    icon: Boxes,
  },
  {
    title: "Returns",
    icon: RotateCcw,
  },
];

type SidebarProps = {
  open: boolean;
  closeSidebar: () => void;
};

export default function Sidebar({
  open,
  closeSidebar,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-screen
        w-[270px]
        bg-white
        border-r
        z-50
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="pt-8 px-5 font-bold">
          <nav className="space-y-2 font-bold">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                    rounded-xl
                    from-bold
                    transition-all

                    ${
                      item.active
                        ? "bg-[#1AA428] text-white font-semibold"
                        : "hover:bg-green-50 text-gray-700 font-bold"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="font-medium">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Categories */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">
                Categories
              </h3>

              <ChevronUp size={18} />
            </div>

            <div className="space-y-4 text-black font-semibold">
              <div>
                <div className="flex justify-between">
                  <span>Food</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Beverage</span>
                  <ChevronUp size={16} />
                </div>

                <div className="ml-8 mt-3 space-y-3 text-sm">
                  <p>Tea Product</p>
                  <p>Coffee Product</p>
                </div>
              </div>

              <div className="flex justify-between">
                <span>Home Care</span>
                <ChevronDown size={16} />
              </div>

              <div className="flex justify-between">
                <span>Beauty & Skin</span>
                <ChevronDown size={16} />
              </div>

              <div className="flex justify-between">
                <span>Health & Wellness</span>
                <ChevronDown size={16} />
              </div>

              <div className="flex justify-between">
                <span>Supplements</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
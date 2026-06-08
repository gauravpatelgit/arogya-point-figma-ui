import React, { useState } from "react";
import products from "../constant-data/products";
import frame from "../constant-data/image/Frame footer.svg";
import { Link } from "react-router-dom";
function Index() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((current) => (current === id ? null : id));
  };

  return (
    <div className="bg-[#E7E7E3] rounded-sm overflow-hidden">
      <div className="flex  md:flex-row items-start md:items-center justify-between gap-3 px-6 pt-6">
        <div className="pb-2">
          <Link to="/AllProduct" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
            All product
          </Link>
          <h5 className="font-semibold">Home {">"} All Product</h5>
        </div>
        <span className="text-[15px]  text-gray-900 pr-1 font-semibold">
          Oct 11, 2023 - Nov 11, 2024
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 px-4 sm:px-6 pb-8">
        {products.map((current) => {
          return (
            <div
              key={current.id}
              className="relative rounded-lg bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleMenu(current.id);
                }}
                className="absolute right-3 top-3 z-20 rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                <span className="text-lg">⋮</span>
              </button>
              {openMenuId === current.id && (
                <div className="absolute right-3 top-12 z-30 w-32 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                  <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      // TODO: add edit action here
                    }}
                  >
                    <span className="mr-2 text-base">✎</span>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      // TODO: add remove action here
                    }}
                  >
                    <span className="mr-2 text-base">🗑</span>
                    Remove
                  </button>
                </div>
              )}
              <Link key={current.id} to={`/ProductDetails/${current.id}`}>
                <img
                  className="mx-auto mt-10 mb-4 w-[156px] h-[156px] object-cover"
                  src={current.thumbnail}
                  alt={current.productName}
                />
                <div className="flex flex-col gap-1 pl-2 pr-2 pb-3">
                  <span
                    className={`text-[13px] inline whitespace-normal break-words ${
                      current.productName ===
                        "Phalada Pure & Sure | Organic Coconut Milk-160ml" ||
                      current.productName ===
                        "Woodi Peck's Araku Organic Black Coffee Powder – 250 Grams"
                        ? "underline decoration-gray-400 decoration-1 underline-offset-1"
                        : ""
                    }`}
                  >
                    {current.productName}
                  </span>
                  <div className="mb-2 flex items-center  text-[18px]">
                    {Array(current.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-[#FF9A00]">
                          ★
                        </span>
                      ))}
                    <span className="text-gray-500 text-[10px] ml-2">
                      ({current.reviews} Reviews)
                    </span>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <span>{"From:"}</span>
                    <span className="font-bold">{current.offerPrice}</span>
                    <span className="text-gray-400 line-through text-[13px]">
                      {current.regularPrice}
                    </span>
                  </div>
                  <span className="text-[13px]">{current.subCategory}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
        <img className="w-[30%] ml-6 mb-8" src={frame} alt="Footer Frame" />
      <div>
      </div>
    </div>
  );
}

export default Index;

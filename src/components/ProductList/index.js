import React from "react";
import products from "../constant-data/products";
import { Link, useParams } from "react-router-dom";
function Index() {
    const id = useParams();
    
  return <div className="h-auto bg-[#E7E7E3] w-full rounded-sm">
  <div className="flex flex-row items-center justify-between pt-5">
  <div className="pl-20">
     <h1>All product
    </h1> 
    <h5>Home > All Product</h5>
    </div>
      <span className="text-[15px] font-medium text-gray-900 pr-20">
    Oct 11, 2023 - Nov 11, 2024
  </span>
  </div>
  <div className="grid grid-cols-4 gap-6 pl-20 pr-20 ">

  {products.map((current)=>{
return(
    
    <div key={current.id} className=" rounded-sm bg-[#FFFFFF]">
            <Link
      key={current.id}
      to={`/ProductDetails/${current.id}`}
    >

    <img   className="pl-20 pr-20 mt-10 pb-10 w-30 h-40"
 src={current.thumbnail}></img>
    <div className="flex flex-col gap-1 pl-2 pr-2 pb-3">
    <span className="text-[13px]">{current.productName}</span>
    <div>
    <span>{'⭐⭐⭐⭐⭐'}</span>
    <span className="text-[13px]" >{current.reviews}reviews</span>
    </div>
    <div>
    <span>{'From:'}</span>
    <span className="font-bold">{current.offerPrice}</span>
    <span className= "text-gray-400">{current.regularPrice}</span>
    </div>
    <span className="text-[13px]">{current.subCategory}</span>
    </div>
    </Link>
    </div>)
    })}
    </div>
  </div>;
}

export default Index;

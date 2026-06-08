import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../constant-data/products";
import { Image } from 'lucide-react';

function Index() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id)) || products[0];
  const description = `• Good news for spring-cleaning your mind, body and spirit\n• Made with organic dandelion, fennel, green tea, lemon myrtle and licorice\n• One sip and you're ready to sparkle\n• Ethically sourced, 100% organically grown ingredients\n• Bring these incredible herbs alive by infusing in freshly boiled water for up to 15 minutes\n• We are proud to be 1% for the planet This product is certified FairWild and Fair for Life`;

  return (
    <div className="p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Details</h1>
          <p className="mt-2 text-sm text-gray-600">
            Home <span className="text-gray-400">/</span> All Products <span className="text-gray-400">/</span> Product Details
          </p>
        </div>
        <span className="text-sm font-semibold text-gray-900">Oct 11, 2023 - Nov 11, 2024</span>
      </div>

      <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Product Name</label>
              <input
                type="text"
                value={product.productName}
                readOnly
                className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Description</label>
              <textarea
                value={description}
                readOnly
                rows={8}
                className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Category</label>
                <select
                  value={product.category}
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                  disabled
                >
                  <option>{product.category}</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Sub Category</label>
                <select
                  value={product.subCategory}
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                  disabled
                >
                  <option>{product.subCategory}</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">SKU</label>
                <input
                  type="text"
                  value={product.sku}
                  readOnly
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Stock Quantity</label>
                <input
                  type="text"
                  value={product.stockQuantity}
                  readOnly
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Regular Price</label>
                <input
                  type="text"
                  value={`₹${product.regularPrice}`}
                  readOnly
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Sale Price</label>
                <input
                  type="text"
                  value={`₹${product.offerPrice}`}
                  readOnly
                  className="w-full rounded-[14px] border border-black bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>

            <div >
              <label className="mb-2 block text-sm font-semibold text-gray-700">Tag</label>
              <div className="flex flex-wrap gap-2 rounded-[14px] border border-black bg-gray-50 px-4 py-3">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#25ea0b] px-3 py-1 mb-8 text-xs font-no text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-gray-200 bg-gray-50 p-6 text-center">
              <img
                src={product.thumbnail}
                alt={product.productName}
                className="mx-auto h-[260px] w-auto rounded-[24px] object-contain"
              />
            </div>

            <div className="rounded-[24px] border border-dashed border-gray-300 bg-[#F8FAF2] p-6 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center text-green-600">
                  <Image size={72} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Product Gallery</p>
              <p className="mt-2 text-xs text-gray-500">Drop your images here, or browse</p>
              <p className="text-xs text-gray-500">Jpeg, png are allowed</p>
            </div>

            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[20px] border border-gray-200 bg-white px-4 py-3">
                  <img
                    className="h-14 w-14 rounded-xl object-cover"
                    src={product.thumbnail}
                    alt={`${product.productName} thumbnail ${item}`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Product thumbnail.png</p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-green-100">
                      <div className="h-full w-full rounded-full bg-[#29B01A]" />
                    </div>
                  </div>
                  <span className="text-green-600 text-xl">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-end justify-end gap-3">
          <button className="min-w-[120px] rounded-[10px] bg-[#1AA428] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#178E20]">
            UPDATE
          </button>
          <button className="min-w-[120px] rounded-[10px] bg-[#E23B3B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C12828]">
            DELETE
          </button>
          <Link
            to="/AllProduct"
            className="min-w-[120px] rounded-[14px] border border-black bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            CANCEL
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;


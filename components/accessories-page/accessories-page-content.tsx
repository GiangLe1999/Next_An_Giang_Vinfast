"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function AccessoriesPageContent() {
  // Sample product data based on the image
  const products = [
    {
      id: 1,
      src: "https://shop.vinfastauto.com/vn_vi/3DTRUNKMATVF6.html",
      name: "Thảm Cốp 3D VF 6",
      price: 990000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwc6dea8ae/images/Accessory/ACS10000036/1.png",
    },
    {
      id: 2,
      name: "VF 7 Thảm Chân Phụ Sàn",
      src: "https://shop.vinfastauto.com/vn_vi/EEP71061000.html",
      price: 6881000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw2aa5cf69/images/Accessory/EEP71061000/1.png",
    },
    {
      id: 3,
      src: "https://shop.vinfastauto.com/vn_vi/EEP31001000.html",
      name: "VF 8 Tấm Che Pin Cao Áp",
      price: 8140000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw41337a0a/images/Accessory/EEP31001000/1.png",
    },
    {
      id: 4,
      src: "https://shop.vinfastauto.com/vn_vi/EEP80001000.html",
      name: "VF 9 Tấm Che Pin Cao Áp",
      price: 8998000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwca9bd466/images/Accessory/EEP80001000/1.png",
    },
    {
      id: 5,
      src: "https://shop.vinfastauto.com/vn_vi/EEP73111000AA.html",
      name: "VF 5 Tấm Che Pin Cao Áp",
      price: 4948000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw3a4f3add/images/Accessory/EEP73111000AA/1.png",
    },
    {
      id: 6,
      src: "https://shop.vinfastauto.com/vn_vi/NERIOGREENBATTERYCOVER.html",
      name: "Tấm Che Pin Cao Áp VinFast Nerio Green",
      price: 5458000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw1b53aa2b/images/Accessory/EEP21001000/1.png",
    },
    {
      id: 7,
      src: "https://shop.vinfastauto.com/vn_vi/EEP70051005.html",
      name: "VF 6 Tấm Che Pin Cao Áp",
      price: 6879000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw79b59bf2/images/Accessory/EEP70051005/1.png",
    },
    {
      id: 8,
      src: "https://shop.vinfastauto.com/vn_vi/VF3ROOFRACKCROSSBAR.html",
      name: "Bộ Thanh Ngang Giá Nóc VF 3",
      price: 1437000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw7bfb0281/images/Accessory/BEX69020910AA/1.png",
    },
    {
      id: 9,
      src: "https://shop.vinfastauto.com/vn_vi/INSULATIONFILMCEILINGVF7.html",
      name: "Gói Film Cách Nhiệt Dán Trần VinFast VF 7",
      price: 5625000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw11e6ff87/images/Accessory/INSULATIONFILM/INSULATIONFILMCEILINGVF7/06.png",
    },
    {
      id: 10,
      src: "https://shop.vinfastauto.com/vn_vi/INSULATIONFILMVF3.html",
      name: "Gói Dán Film Cách Nhiệt VinFast VF 3",
      price: 5000000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw822318e9/images/Accessory/INSULATIONFILM/INSULATIONFILMVF3/01.png",
    },
    {
      id: 11,
      src: "https://shop.vinfastauto.com/vn_vi/EEP69072176AB.html",
      name: "Sạc Tại Nhà 3KW",
      price: 6000000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw626dfae2/images/Accessory/EEP69072176AB/01.png",
    },
    {
      id: 12,
      src: "https://shop.vinfastauto.com/vn_vi/ACS30000142.html",
      name: "Thanh Ngang Giá Nóc VinFast VF 8",
      price: 18360000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw214c8c9c/images/Accessory/ACS30000142/01.png",
    },
    {
      id: 13,
      name: "Mũ Lưỡi Trai Thêu Chữ VF 8",
      price: 210000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 14,
      name: "Thảm Nhung VF 7",
      price: 1580000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 15,
      name: "Giúp Nạp Điện VinFast VF e",
      price: 1250000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 16,
      name: "Bọc Vô lăng VinFast VF 5 Plus",
      price: 550000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 17,
      name: "Áo Đồng VinFast VF 5 Plus",
      price: 650000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 18,
      name: "Camera Lùi VF 5",
      price: 1450000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 19,
      name: "Sạc Đặt Bàn VF 5",
      price: 850000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 20,
      name: "Bọc Ghế VinFast VF 8",
      price: 1950000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 21,
      name: "Quạt Làm Mát VF 8",
      price: 650000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 22,
      name: "Miếng Lót Sàn VinFast VF 8",
      price: 490000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 23,
      name: "Bình Làm Sạch VF 8",
      price: 380000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 24,
      name: "Áo Phượng VF 5 Plus",
      price: 565000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 25,
      name: "Túc Sắc VF 7",
      price: 375000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 26,
      name: "Mũ Lưỡi Trai VF 8",
      price: 290000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 27,
      name: "Bộ Sạc 7kW Tường AC 11-kW",
      price: 12500000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 28,
      name: "Cửa Sạc Điện VinFast Model",
      price: 5550000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 29,
      name: "Thảm Cao Miếng Lót VF 7",
      price: 680000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 30,
      name: "Thảm Chân Sàn VF 7",
      price: 980000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 31,
      name: "Thảm Sàn Sàn VF 8",
      price: 1290000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 32,
      name: "Lót Cốp Sàn Dày VinFast",
      price: 2750000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 33,
      name: "Thảm Sàn VF 5 VF 8",
      price: 1890000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 34,
      name: "Mô Hình Xe VinFast VF 8",
      price: 1590000,
      image: "/api/placeholder/200/150",
    },
    {
      id: 35,
      name: "Mô Hình Xe VinFast VF 9",
      price: 1650000,
      image: "/api/placeholder/200/150",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format price with commas and VND
  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Hero Banner */}
      <div className="w-full aspect-[1.77] bg-blue-50 rounded-lg mb-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="relatigve w-full ">
            <Image
              src="/images/phu-kien/phu-kien-vinfast.webp"
              alt="Phụ kiện chính hãng Vinfast"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-2xl mb-4 md:mb-0 text-primary font-bold">
          Danh Mục Sản Phẩm
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <BiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <Link
            href={product.src || ""}
            key={product.id}
            className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-6">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  fill
                  src={product.image}
                  alt={product.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 h-12">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-blue-600">
                {formatPrice(product.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Show Empty State if No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
        </div>
      )}
    </div>
  );
}

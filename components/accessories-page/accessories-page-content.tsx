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
      src: "https://shop.vinfastauto.com/vn_vi/VF5FLORALEMBROIDEREDCAP.html",
      name: "Mũ Lưỡi Trai Thêu Hoa VF 5",
      price: 331000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw9a705227/images/Accessory/VF5FLORALEMBROIDEREDCAP/Blue.png",
    },
    {
      id: 14,
      src: "https://shop.vinfastauto.com/vn_vi/BIN69052209AA.html",
      name: "Thảm Nhựa VF3",
      price: 16688000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw51cbc8fc/images/Accessory/BIN69052209AA/TX01.png",
    },
    {
      id: 15,
      src: "https://shop.vinfastauto.com/vn_vi/ACS30000141.html",
      name: "Cốp Nóc Phi Thuyền ô tô VinFast VF 8",
      price: 7000000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw9a5905bf/images/Accessory/ACS30000141/01.png",
    },
    {
      id: 16,
      src: "https://shop.vinfastauto.com/vn_vi/VF5PLUSEMBROIDEREDPOLO.html",
      name: "Áo Polo VinFast VF 5 Thêu Hoa",
      price: 533000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw94cc6bcf/images/Accessory/VF5PLUSEMBROIDEREDPOLO/White/2.png",
    },
    {
      id: 17,
      src: "https://shop.vinfastauto.com/vn_vi/VF5PLUSEMBROIDEREDTSHIRT.html",
      name: "Áo Phông VinFast VF 5 Thêu Hoa",
      price: 478000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw35c7e5e2/images/Accessory/VF5PLUSEMBROIDEREDTSHIRT/White/1.png",
    },
    {
      id: 18,
      src: "https://shop.vinfastauto.com/vn_vi/EEP73090003AB.html",
      name: "Camera Lùi VF 3",
      price: 2722000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwa83d9527/images/Accessory/EEP73090003AB/EEP73090003AB.png",
    },
    {
      id: 19,
      src: "https://shop.vinfastauto.com/vn_vi/VHC69012100AA.html",
      name: "Bọc Vô Lăng VF 3",
      price: 837000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw2dbbabb5/images/Accessory/VHC69012100AA/VHC69012100AA.png",
    },
    {
      id: 20,
      src: "https://shop.vinfastauto.com/vn_vi/VHC69011000AA.html",
      name: "Bọc Ghế Da VF 3",
      price: 6714000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw8a49e712/images/Accessory/VHC69011000AA/VHC69011000AA.png",
    },
    {
      id: 21,
      src: "https://shop.vinfastauto.com/vn_vi/CHS69060008AB.html",
      name: "Ốp La-zăng VF 3",
      price: 843000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw66611eed/images/Accessory/CHS69060008AA/CHS69060008AA.png",
    },
    {
      id: 22,
      src: "https://shop.vinfastauto.com/vn_vi/VINFASTSILKSCARF.html",
      name: "Khăn Lụa Cao Cấp VinFast",
      price: 3490000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwcd9d19f6/images/Accessory/VINFASTSILKSCARF/Blue.png",
    },
    {
      id: 23,
      src: "https://shop.vinfastauto.com/vn_vi/THERMOSVINFASTVF7.html",
      name: "Bình Giữ Nhiệt VF 7",
      price: 698000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwb1225490/images/Accessory/THERMOSVINFASTVF7/Black/1.png",
    },
    {
      id: 24,
      src: "https://shop.vinfastauto.com/vn_vi/VF7SPECIALTSHIRT.html",
      name: "Áo Phông VF 7 Đặc Biệt",
      price: 663000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw545bc108/images/Accessory/VF7SPECIALTSHIRT/White/1.png",
    },
    {
      id: 25,
      src: "https://shop.vinfastauto.com/vn_vi/VF7TSHIRT.html",
      name: "Áo Phông VF 7",
      price: 663000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwb3e89efa/images/Accessory/VF7TSHIRT/White/1.png",
    },
    {
      id: 26,
      src: "https://shop.vinfastauto.com/vn_vi/VF7TSHIRT.html",
      name: "Áo Phông VF 7",
      price: 663000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwb3e89efa/images/Accessory/VF7TSHIRT/White/1.png",
    },
    {
      id: 27,
      src: "https://shop.vinfastauto.com/vn_vi/ACS30000103.html",
      name: "Túi Tote VF 7",
      price: 137000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwd9ccebe3/images/Accessory/ACS30000103/1.png",
    },
    {
      id: 28,
      src: "https://shop.vinfastauto.com/vn_vi/ACS30000104.html",
      name: "Mũ Lưỡi Trai VF 7",
      price: 294000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwd0c6fdfe/images/Accessory/ACS30000104/1.png",
    },
    {
      id: 29,
      src: "https://shop.vinfastauto.com/vn_vi/EEP30000011.html",
      name: "Bộ Sạc Treo Tường AC 11 kW",
      price: 12000000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwf6965263/images/Accessory/EEP30000011/1.png",
    },
    {
      id: 30,
      src: "https://shop.vinfastauto.com/vn_vi/INSULATIONFILMVF7.html",
      name: "Gói Dán Film Cách Nhiệt VinFast VF 7",
      price: 5500000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw05ef9697/images/Accessory/INSULATIONFILM/INSULATIONFILMVF7/1.png",
    },
    {
      id: 31,
      src: "https://shop.vinfastauto.com/vn_vi/ACS10000042.html",
      name: "Tấm Che Nắng Cửa VF 7",
      price: 540000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw9d726bcb/images/Accessory/ACS10000042/1.png",
    },
    {
      id: 32,
      src: "https://shop.vinfastauto.com/vn_vi/ACS10000041.html",
      name: "Thảm Cốp 3D VF 7",
      price: 990000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw943881b6/images/Accessory/ACS10000041/1.png",
    },
    {
      id: 33,
      src: "https://shop.vinfastauto.com/vn_vi/ACS10000040.html",
      name: "Thảm Sàn 3D VF 7",
      price: 1994000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw0938b99e/images/Accessory/ACS10000040/1.png",
    },
    {
      id: 34,
      src: "https://shop.vinfastauto.com/vn_vi/ACS30000078.html",
      name: "Lót Cốc Sơn Mài VinFast",
      price: 2783000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwec6ae8a1/images/Accessory/ACS30000078/1.png",
    },
    {
      id: 35,
      src: "https://shop.vinfastauto.com/vn_vi/FLOORMATS3DVF9.html",
      name: "Thảm Sàn 3D VF 9",
      price: 2990000,
      image:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dw681468fa/images/Accessory/FLOORMATS3DVF9/ACS10000043/1.png",
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

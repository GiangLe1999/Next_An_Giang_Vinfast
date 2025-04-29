import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

export default function WarrantyPolicyPageContent() {
  // const [bookingType, setBookingType] = useState("car"); // 'car' or 'electric'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Bảo hành - sửa chữa
        </h1>
        <Link
          href="https://shop.vinfastauto.com/vn_vi/dat-lich-dich-vu-bao-duong.html"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md"
        >
          Đặt lịch bảo dưỡng
        </Link>
      </div>

      {/* Service Center Image */}
      <div className="relative w-full h-96 mb-16">
        <Image
          src="/images/bao-hanh/chinh-sach-bao-hanh-banner.webp"
          alt="VinFast Service Center"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Car/Electric Vehicle Selection */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 sm:mb-0">
          Thời hạn bảo hành xe máy điện
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <p className="mb-4">
              Thời hạn bảo hành <b>5 năm (không giới hạn km)</b> đối với các
              dòng xe máy điện VinFast sử dụng pin LFP và thời hạn bảo hành 3
              năm (không giới hạn km) cho các dòng xe còn lại.
            </p>
            <p className="mb-6">
              Quý khách hàng vui lòng tham khảo tại Sổ bảo hành để biết thêm các
              thông tin bảo hành chi tiết.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://static-cms-prod.vinfastauto.com/250226_sbh-xmd_5-year.pdf"
                className="border border-blue-600 text-blue-600 py-3 px-4 rounded text-center hover:bg-blue-50"
              >
                Sổ bảo hành xe máy điện Pin LFP
              </Link>
              <Link
                href="https://static-cms-prod.vinfastauto.com/250226_sbh-xmd_3-year.pdf"
                className="border border-blue-600 text-blue-600 py-3 px-4 rounded text-center hover:bg-blue-50"
              >
                Sổ bảo hành xe máy điện Pin khác
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-64">
            <Image
              src="/images/bao-hanh/chinh-sach-bao-hanh-xe-may-dien.webp"
              alt="VinFast Car"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Car Warranty */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Thời hạn bảo hành ô tô</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Đối với xe được sử dụng ở điều kiện sử dụng tiêu chuẩn:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Thời hạn bảo hành 10 năm hoặc 200.000 km tùy điều kiện nào đến
                trước: Fadil, Lux A 2.0, Lux SA 2.0, President, Nerio Green, VF
                e34, VF 7, VF 8, VF 9.
              </li>
              <li>
                Thời hạn bảo hành 7 năm hoặc 160.000 km tùy điều kiện nào đến
                trước: VF 3, VF 5, VF 6, VF Minio Green, VF Herio Green, VF
                Limo.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Đối với xe đang hoặc đã từng được sử dụng cho hoạt động dịch vụ
              thương mại:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Thời hạn bảo hành 3 năm hoặc 100.000 km tùy điều kiện nào đến
                trước: VF 3, VF 7, VF 8, VF 9.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Các điều kiện bảo hành:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Phụ tùng được thay thế theo chính sách bảo hành xe có thời hạn
                bảo hành bằng thời hạn bảo hành còn lại của xe; hoặc thời hạn
                bảo hành còn lại của phụ tùng được thay thế đó (trong trường hợp
                phụ tùng có thời hạn bảo hành riêng).
              </li>
              <li>
                Dịch vụ thương mại là đối tượng khách hàng kinh doanh, bao gồm
                nhưng không giới hạn, đang hoặc đã từng sử dụng xe làm taxi, xe
                sử dụng cho dịch vụ chở khách, kể cả các dịch vụ như Grab, Be
                hay tương tự, xe cho thuê, xe đưa đón, xe giao hàng.
              </li>
              <li>
                Đối với xe đã từng được sử dụng cho mục đích dịch vụ thương mại,
                chính sách bảo hành áp dụng cho xe sử dụng cho mục đích dịch vụ
                thương mại sẽ tiếp tục được duy trì và áp dụng kể cả trong
                trường hợp chuyển nhượng xe cho chủ sở hữu mới hoặc xe không còn
                được sử dụng cho mục đích dịch vụ thương mại.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Quy trình bảo hành:</h3>
            <p>
              Khách hàng có thể mang xe đến bất kỳ trung tâm dịch vụ ủy quyền
              nào của VinFast để được kiểm tra và bảo hành theo quy định. Trước
              khi đến, quý khách vui lòng đặt lịch hẹn trước để được phục vụ tốt
              nhất.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="https://vinfastauto.com/vn_vi/thong-tin-bao-hanh"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md"
          >
            Xem chi tiết chính sách
          </Link>
        </div>
      </div>

      {/* Warranty Scope Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 sm:mb-0">
          Phạm vi bảo hành
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-1/2">
            <p className="mb-4">
              Bảo hành áp dụng cho các hư hỏng do lỗi phần mềm, lỗi chất lượng
              của linh kiện hoặc lỗi lắp ráp của VinFast với điều kiện sản phẩm
              được sử dụng và bảo dưỡng đúng cách, ngoại trừ các hạng mục không
              thuộc phạm vi bảo hành.
            </p>
            <p className="mb-4">
              Phụ tùng thay thế trong bảo hành là những chi tiết, linh kiện
              chính hãng nhỏ nhất được VinFast cung cấp.
            </p>
            <p>
              Bảo hành có hiệu lực trên toàn lãnh thổ Việt Nam, chỉ được áp dụng
              và thực hiện tại các Xưởng dịch vụ và Nhà phân phối ủy quyền của
              VinFast.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative h-64">
            <Image
              src="/images/bao-hanh/chinh-sach-bao-hanh-anh-1.webp"
              alt="Technician working on car"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-4">
            <p>
              Chúng tôi cung cấp dịch vụ bảo hành tại các trung tâm dịch vụ
              chính hãng trên toàn quốc. Đội ngũ nhân viên được đào tạo chuyên
              nghiệp sẽ giúp quý khách giải quyết mọi vấn đề về xe.
            </p>
            <p>
              Công việc bảo hành được thực hiện miễn phí theo các điều khoản và
              điều kiện bảo hành.
            </p>
            <p>
              VinFast không có trách nhiệm thu hồi và thay thế sản phẩm khác cho
              khách hàng nếu việc sửa chữa bảo hành có thể khắc phục được lỗi
              chất lượng, lỗi vật liệu hay lỗi lắp ráp của nhà sản xuất.
            </p>
            <p>
              Khách hàng cũng có thể theo dõi lịch sử bảo dưỡng và bảo hành của
              xe thông qua ứng dụng di động hoặc tài khoản trực tuyến.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src="/images/bao-hanh/xuong-bao-hanh-vinfast.jpg"
              alt="Service center"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Accessories */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Phụ tùng xe mới - Bảo hành gói hạn
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Pin cao áp mua theo xe mới, sử dụng tiêu chuẩn:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Áp dụng cho VF 7, VF 8, VF 9, VF e34, VF Nerio Green: được bảo
                hành 10 năm không giới hạn số Km.
              </li>
              <li>
                Áp dụng cho VF 3, VF 5, VF 6, VF Minio Green, VF Herio Green, VF
                Limo: được bảo hành 8 năm không giới hạn số Km.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Pin cao áp mua theo xe mới, xe đang hoặc đã từng sử dụng cho mục
              đích dịch vụ thương mại:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Áp dụng cho VF 3, VF 7, VF 8, VF 9: được bảo hành 3 năm hoặc
                100.000 km tùy điều kiện nào đến trước.
              </li>
              <li>
                Áp dụng cho VF e34, VF Nerio Green: được bảo hành 10 năm hoặc
                200.000 km tùy điều kiện nào đến trước.
              </li>
              <li>
                Áp dụng cho VF 5, VF 6, VF Minio Green, VF Herio Green, VF Limo:
                được bảo hành 8 năm không giới hạn số Km.
              </li>
            </ul>
            <p className="mt-4">
              Đối với xe đã từng được sử dụng cho mục đích dịch vụ thương mại,
              chính sách bảo hành pin áp dụng cho xe sử dụng cho mục đích dịch
              vụ thương mại sẽ tiếp tục được duy trì và áp dụng kể cả trong
              trường hợp chuyển nhượng xe cho chủ sở hữu mới hoặc xe không còn
              được sử dụng cho mục đích dịch vụ thương mại.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Ắc - quy:</h3>
            <p className="mb-3">Điều kiện sử dụng tiêu chuẩn:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Ô tô xăng: 1 năm hoặc 20.000 km tùy thuộc điều kiện nào đến
                trước.
              </li>
              <li>Ô tô điện: 1 năm (không giới hạn quãng đường sử dụng).</li>
            </ul>

            <p className="mb-3">Sử dụng xe cho dịch vụ thương mại:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Ô tô điện VF 3, VF 7, VF 8, VF 9 đang hoặc đã từng sử dụng cho
                dịch vụ thương mại: 1 năm hoặc 40.000 km tùy điều kiện nào đến
                trước.
              </li>
            </ul>

            <p className="mb-3">
              Xe máy điện: Ắc quy có thời hạn bảo hành 1 năm (không giới hạn
              quãng đường sử dụng).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Gỉ sét</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Điều kiện sử dụng tiêu chuẩn: Bảo hành gỉ sét có thời hạn bảo
                hành là 10 năm từ ngày kích hoạt bảo hành xe (không giới hạn
                quãng đường sử dụng) với xe VF 7, VF 8, VF 9, VF e34, VF Nerio
                Green sử dụng trong điều kiện tiêu chuẩn, áp dụng với tấm kim
                loại bị xuyên thủng trong điều kiện hoạt động bình thường mà
                nguyên nhân do lỗi nguyên vật liệu hoặc lỗi lắp ráp của nhà sản
                xuất, và 7 năm không giới hạn số km với xe VF 3, VF 5, VF 6, VF
                Minio Green, VF Herio Green, VF Limo.
              </li>
              <li>
                Sử dụng cho dịch vụ thương mại: Bảo hành là 3 năm hoặc 100.000
                km với xe đang hoặc đã từng sử dụng cho mục đích dịch vụ thương
                mại đối với VF 3, VF 7, VF 8, VF 9.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Sơn ngoại thất</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Điều kiện sử dụng tiêu chuẩn: Sơn ngoại thất vỏ xe được bảo hành
                3 năm không giới hạn số km.
              </li>
              <li>
                Sử dụng cho dịch vụ thương mại: 3 năm hoặc 100.000 km áp dụng
                cho VF 3, VF 7, VF 8, VF 9.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Các bộ phận treo</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Sử dụng trong điều kiện tiêu chuẩn: Các bộ phận treo (Bộ giảm
                xóc, Thanh ổn định, Cụm liên kết trên, Cánh tay điều khiển dưới,
                Khớp bi, Lắp thanh chống trên) được bảo hành 5 năm hoặc 100.000
                km tùy điều kiện nào đến trước.
              </li>
              <li>
                Sử dụng cho mục đích dịch vụ thương mại: áp dụng cho VF 3, VF 7,
                VF 8, VF 9, thời hạn bảo hành là 3 năm hoặc 100.000 km.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Lốp xe</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Lốp được trang bị theo xe (bao gồm cả lốp dự phòng nếu có) được
                bảo hành đối với các khuyết tật, hư hỏng do lỗi nguyên vật liệu
                hoặc lỗi trong quá trình sản xuất, lưu kho của nhà sản xuất lốp
                được tính kể từ ngày kích hoạt bảo hành xe. Chi tiết bảo hành
                đối với từng loại sản phẩm như sau:
              </li>
              <li>Ô tô xăng: 5 năm (không giới hạn quãng đường sử dụng).</li>
              <li>Ô tô điện: Bảo hành bởi nhà sản xuất lốp xe.</li>
              <li>
                Nếu nhà sản xuất lốp cung cấp dịch vụ bảo hành tại thị trường
                Việt Nam, lốp xe sẽ được bảo hành hành theo chính sách riêng của
                nhà sản xuất lốp xe.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">
              Những hạng mục, hư hỏng không thuộc bảo hành lốp:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hư hỏng do lốp xe bị phá hoại, tai nạn hoặc va chạm.</li>
              <li>Hư hỏng do lốp bị lạm dụng trong quá trình sử dụng.</li>
              <li>
                Hư hỏng do lốp không được bảo dưỡng hoặc vận hành với áp suất
                lốp không tiêu chuẩn.
              </li>
              <li>
                Lốp là chi tiết hao mòn theo thời gian và quãng đường sử dụng,
                các hao mòn này không thuộc phạm vi bảo hành.
              </li>
              <li>
                Các hư hỏng được đánh giá không ảnh hưởng đến chất lượng, hiệu
                suất hoặc chức năng của lốp.
              </li>
              <li>
                Sử dụng lốp sai so với mục đích khuyến nghị của nhà sản xuất.
              </li>
              <li>Lốp đã được sửa chữa, thay đổi, đắp hoặc dán lại.</li>
              <li>
                Hư hỏng do ảnh hưởng từ các yếu tố bên ngoài như tình trạng của
                đường hoặc các bề mặt tiếp xúc khác, những yếu tố khác như hóa
                chất, ô nhiễm, mưa axit, mưa đá, cát, không khí, muối, đá, hỏa
                hoạn, thiên tai, v.v...
              </li>
              <li>
                Các vấn đề phát sinh khác mà không thể chứng minh được là có
                trực tiếp hay gián tiếp liên quan đến vấn đề chất lượng lốp như
                chi phí cho việc không sử dụng xe, tiêu tốn thời gian, nhiên
                liệu, điện thoại, chỗ ở hoặc các phát sinh khác.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Bộ sạc treo tường</h3>
            <p>
              Bộ sạc treo tường Chính hãng do Khách hàng mua tại XDV/NPP
              VinFast, có thời gian bảo hành 2 năm, không giới hạn số km kể từ
              ngày kích hoạt Bảo hành.
            </p>
          </div>
        </div>
      </div>

      {/* Genuine Parts */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">
              Bảo hành phụ tùng - Thay thế chính hãng
            </h2>
            <p className="mb-4">
              Phụ tùng chính hãng đảm bảo tính tương thích hoàn hảo với xe của
              bạn, giúp xe vận hành êm ái và kéo dài tuổi thọ.
            </p>
            <p>
              Phụ tùng thay thế cho xe của khách hàng trong quá trình sửa chữa
              tại XDV/NPP của VinFast do khách hàng chịu chi phí, sẽ có thời hạn
              bảo hành như sau:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="font-bold mb-2">
                Phụ tùng (không bao gồm Ắc Quy 12V và Pin cao áp)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ô tô xăng: bao gồm Fadil, Lux A, Lux SA, President: 12 tháng
                  hoặc 20.000 km tùy thuộc điều kiện nào đến trước từ ngày hoàn
                  thành sửa chữa.
                </li>
                <li>
                  Ô tô điện: bao gồm VF 5, Nerio Green, VF 6, VF 7, VF 8, VF 9,
                  VF 3, VF Minio Green, VF Herio Green, VF Limo: 2 năm từ ngày
                  mua phụ tùng (không giới hạn quãng đường sử dụng).
                </li>
                <li>
                  Xe máy điện: 1 năm từ ngày mua phụ tùng (không giới hạn quãng
                  đường sử dụng).
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="font-bold mb-2">Pin cao áp:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Sử dụng trong điều kiện tiêu chuẩn: 4 năm hoặc 80.000 km tùy
                  điều kiện nào đến trước, tính từ ngày mua.
                </li>
                <li>
                  Sử dụng cho mục đích dịch vụ thương mại: 3 năm hoặc 80.000 km
                  tùy điều kiện nào đến trước, tính từ ngày mua, áp dụng cho VF
                  3, VF 7, VF 8, VF 9.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="font-bold mb-2">Ắc quy 12V:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Sử dụng trong điều kiện tiêu chuẩn: 1 năm không giới hạn số
                  km, tính từ ngày mua.
                </li>
                <li>
                  Sử dụng cho mục đích dịch vụ thương mại: 1 năm hoặc 40.000 km
                  tùy điều kiện nào đến trước, tính từ ngày mua, áp dụng cho VF
                  3, VF 7, VF 8, VF 9.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative aspect-square">
            <Image
              src="/images/bao-hanh/chinh-sach-bao-hanh-phu-tung.webp"
              alt="Genuine parts"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Genuine VinFast Parts */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Bảo hành phụ kiện - Chính hãng VinFast
        </h2>

        <div className="space-y-6 mb-8">
          <p>Theo quy định sau:</p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                Phụ kiện (Không bao gồm Móc kéo xe (bao gồm điện), Bậc lên xuống
                xe, Giá đỡ hành lý) được bảo hành 2 năm hoặc 40.000 km tùy điều
                kiện nào đến trước kể từ ngày mua.
              </li>
              <li>
                Các phụ kiện bao gồm móc kéo xe (bao gồm điện), bậc lên xuống xe
                và giá đỡ hành lý: <br /> Sử dụng trong điều kiện tiêu chuẩn: có
                thời hạn bảo hành là 5 năm hoặc 100.000 km tùy theo điều kiện
                nào đến trước kể từ ngày mua. <br /> Sử dụng cho mục đích dịch
                vụ thương mại: có thời hạn bảo hành là 3 năm hoặc 100.000 km tùy
                theo điều kiện nào đến trước kể từ ngày mua, áp dụng cho VF 3,
                VF 7, VF 8, VF 9.
              </li>
              <li>
                Thời hạn bảo hành áp dụng cho các phụ kiện chính hãng không yêu
                cầu lắp đặt cố định trên xe (nếu có) như: Bộ sạc di động, bộ
                dụng cụ sửa chữa lốp, thảm sàn, tấm rèm trần, xích lốp, giá ngăn
                hành lý, biển tam giác cảnh báo và áo khoác phản quang... là 2
                năm hoặc 40.000 km tùy theo điều kiện nào đến trước kể từ ngày
                mua.
              </li>
              <li>
                Phụ kiện được thay thế theo bảo hành phụ kiện có thời hạn bảo
                hành theo thời hạn bảo hành còn lại của phụ kiện.
              </li>
              <li>
                Để nhận được bảo hành phụ kiện VinFast, khách hàng có trách
                nhiệm lưu giữ hồ sơ lắp đặt, quyết toán và hóa đơn cho các phụ
                kiện đó.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src="/images/bao-hanh/phu-tung-vinfast.webp"
              alt="VinFast accessories"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src="/images/bao-hanh/lap-dat-phu-tung-vinfast.jpg"
              alt="VinFast accessories installation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Non-covered Items */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Các hạng mục không thuộc phạm vi bảo hành
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              Hư hỏng do nguyên nhân của việc sửa chữa, điều chỉnh, đấu nối phụ
              kiện không chính hãng, hoán cải trái phép so với thiết kế ban đầu
              như thay đổi công suất, thay đổi cấu trúc, v.v..
            </li>
            <li>
              Hư hỏng xảy ra có nguyên nhân do sử dụng sai chức năng và lạm dụng
              xe như: Lái xe trong điều kiện khắc nghiệt như đua xe, chạy xe
              trên đường gồ ghề, chở quá tải, sử dụng và bảo quản không theo chỉ
              dẫn trong sách hướng dẫn sử dụng.
            </li>
            <li>
              Gỉ sét thông thường, bạc màu sơn, cao su lão hóa, dầu mỡ bị biến
              chất, hao mòn tự nhiên và giảm giá trị theo thời gian.
            </li>
            <li>
              Những hiện tượng xảy ra mà VinFast đánh giá không ảnh hưởng đến
              chất lượng và sự hoạt động của xe như tiếng ồn, rung động nhỏ và
              vết thấm dầu, v.v..
            </li>
            <li>
              Hư hỏng gây ra bởi các yếu tố nằm ngoài kiểm soát của nhà sản xuất
              bao gồm hỏa hoạn, động đất, bão, lũ lụt, các thiên tai khác và
              những thiệt hại do các loài động vật gây ra.
            </li>
            <li>
              Hư hỏng do tai nạn hoặc sử dụng xe trong điều kiện ngập nước, hư
              hỏng gây ra bởi ngoại vật như đất, cát, sỏi, đá, vật cứng sắc
              nhọn, v.v. tác động vào xe trong quá trình vận hành.
            </li>
            <li>
              Hư hỏng bề mặt gây ra bởi các yếu tố ngoài kiểm soát như: Tàn
              thuốc lá, hóa chất, phân động vật, nhựa cây, muối, mưa axit và các
              yếu tố tương tự khác.
            </li>
            <li>
              Các chi tiết hư hỏng do hao mòn tự nhiên như má phanh, đĩa phanh,
              thanh gạt nước kèm/không kèm cao su, pin điều khiển, cầu chì,
              v.v.; vật tư nằm trong danh mục thay thế định kỳ như các loại dầu,
              mỡ, dung dịch, chất phụ gia, các loại lọc, v.v..
            </li>
            <li>
              Hư hỏng do việc không tuân thủ lịch bảo dưỡng định kỳ hoặc bảo
              dưỡng, sửa chữa không đúng theo hướng dẫn của nhà sản xuất.
            </li>
            <li>
              Bảo hành sẽ không được áp dụng cho các dịch vụ làm sạch, kiểm tra,
              điều chỉnh và các hạng mục bảo dưỡng định kỳ.
            </li>
            <li>
              Thay đổi chỉ số km trên đồng hồ công tơ mét dẫn đến không xác định
              được chính xác thời hạn bảo hành, các trường hợp gạch xóa, cậy phá
              hoặc làm mất trạng thái nguyên bản các phụ tùng dẫn tới việc không
              xác định được phụ tùng có được trang bị nguyên bản trên xe.
            </li>
            <li>
              Những hư hỏng kéo theo do việc chậm trễ đưa xe đến NPP/XDV kiểm
              tra sửa chữa khi phát hiện xe có hư hỏng.
            </li>
            <li>
              Hư hỏng xảy ra trong thời hạn bảo hành nhưng báo cáo sau khi thời
              hạn bảo hành hết hiệu lực do chậm trễ của người sử dụng.
            </li>
            <li>
              Trong phạm vi pháp luật cho phép, VinFast từ chối bất cứ trách
              nhiệm nào cho các tổn thất hoặc các chi phí phát sinh khác liên
              quan tới bảo hành xe như phí điện thoại, phí ăn ở, thuê phương
              tiện khác, đi lại và thiệt hại kinh doanh hoặc tiêu tốn thời gian.
            </li>
            <li>
              Để đảm bảo quyền lợi bảo hành đối với xe của khách hàng, vui lòng
              xem nội dung chi tiết trong cuốn Sổ bảo hành đi kèm theo xe.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

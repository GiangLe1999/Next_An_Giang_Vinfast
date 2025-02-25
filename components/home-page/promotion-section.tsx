import { FaUsersCog } from "react-icons/fa";
import SectionTitle from "./section-title";
import { HiReceiptTax } from "react-icons/hi";

const PromotionSection = () => {
  return (
    <section className="pt-28 pb-10 container">
      <p className="text-textColor text-center font-bold text-sm mb-2">
        CHƯƠNG TRÌNH
      </p>
      <SectionTitle title="KHUYẾN MÃI VINFAST" />

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 py-8 max-[738px]:grid-cols-1 mt-3">
        <div>
          <p className="text-primary text-base font-bold mb-2 flex items-center gap-1">
            <HiReceiptTax size={20} color="#025eda" /> ƯU ĐÃI XE VINFAST 2025
          </p>
          <ul className="text-sm text-textColor leading-7">
            <li>
              <b>VinFast VF 3</b>: Tặng bộ sạc di động, bảo hành pin 10 năm,
              miễn phí sạc tại trạm V-GREEN đến 2027. Giá chỉ từ{" "}
              <b className="text-primary">240 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 5</b>: Ưu đãi 100% phí trước bạ, hỗ trợ trả góp lãi
              suất 0% năm đầu, tặng gói bảo hiểm thân vỏ. Giá chỉ từ{" "}
              <b className="text-primary">472 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 6</b>: Giảm trực tiếp 15 triệu, miễn phí cứu hộ
              24/7, tặng bộ sạc nhanh tại nhà. Giá chỉ từ{" "}
              <b className="text-primary">640 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 7</b>: Hỗ trợ đổi xe xăng sang xe điện, tặng gói bảo
              dưỡng miễn phí 3 năm. Giá chỉ từ{" "}
              <b className="text-primary">760 Triệu</b>.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary text-base font-bold mb-2 flex items-center gap-1">
            <FaUsersCog size={20} color="#025eda" /> TRẢ GÓP – LÃI SUẤT ƯU ĐÃI
          </p>
          <p className="text-sm text-textColor leading-7 mt-2 mb-4">
            VinFast mang đến chính sách trả góp linh hoạt, giúp khách hàng dễ
            dàng sở hữu xe mà không cần thanh toán toàn bộ chi phí ban đầu. Với
            sự hợp tác cùng các ngân hàng hàng đầu, khách hàng có thể vay lên
            đến <strong className="text-primary">85% giá trị xe</strong>, thời
            gian trả góp lên đến 8 năm, kèm theo lãi suất ưu đãi chỉ từ 0% trong
            năm đầu tiên.
          </p>
          <p className="text-sm text-textColor leading-7">
            Đặc biệt, VinFast còn hỗ trợ miễn phí phí trả nợ trước hạn trong{" "}
            <strong className="text-primary">3 năm đầu</strong> đối với các dòng
            xe điện. Chỉ với khoản trả trước{" "}
            <strong className="text-primary">từ 20%</strong>, khách hàng có thể
            nhận xe ngay và tận hưởng những công nghệ hiện đại cùng chính sách
            hậu mãi tốt nhất.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;

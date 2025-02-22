import SectionTitle from "./section-title";
import NextImage from "../next-image";
import CustomerSwiper from "./customer-swiper";
import { BsFillGiftFill, BsTagsFill, BsChatHeartFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";

const ReasonsSection = () => {
  return (
    <section className="container py-10">
      <p className="text-textColor text-center font-bold text-sm mb-2">
        TẠI SAO NÊN MUA XE TẠI
      </p>
      <SectionTitle title="VINFAST SUỐI TIÊN" />

      <div className="grid grid-cols-2 mt-12 gap-6 max-[1100px]:grid-cols-1">
        <ul className="space-y-5 text-sm leading-7">
          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsTagsFill size={16} /> Gía cả ưu đãi - Giao xe sớm
            </p>
            <p>
              Vinfast Suối Tiên luôn cam kết mang lại mức giá ưu đãi nhất cho
              quý khách với thời gian giao xe nhanh nhất trong 1 ngày.
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <SiAdguard size={16} /> Bảo hành theo tiêu chuẩn toàn quốc
            </p>
            <p>
              Anh chị sẽ yên tâm khi mua xe tại Vinfast Suối Tiên, vì chúng tôi
              luôn bảo hành, bảo dưỡng và sửa chữa theo tiêu chuẩn chất lượng
              của Mazda trên toàn quốc. BẢO HÀNH ĐẾN 5 NĂM.
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsFillGiftFill size={16} /> Khuyến mãi nhiều nhất
            </p>
            <p>
              Với hoạt động bán hàng sôi nổi, chúng tôi luôn cập nhật sớm nhất
              các chương trình khuyến mãi của hãng và đại lý
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsChatHeartFill size={16} /> Tư vấn tận tình
            </p>
            <p>
              Đội ngũ tư vấn luôn sẵn lòng giúp Anh chị tìm được chiếc xe ưng ý.
            </p>
          </li>
        </ul>

        <div className="relative w-full aspect-[1.55] rounded-sm overflow-hidden">
          <NextImage
            src="/images/home/tai-sao-nen-mua-vinfast.webp"
            alt="Tại sao nên mua xe Vinfast?"
          />
        </div>
      </div>

      <CustomerSwiper />
    </section>
  );
};

export default ReasonsSection;

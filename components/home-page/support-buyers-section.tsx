import { FaPhoneAlt } from "react-icons/fa";

const SupportBuyersSection = () => {
  return (
    <section
      id="support-buyers"
      className="md:h-[160px] h-auto bg-primary flex items-center py-8"
    >
      <div className="flex items-center justify-between text-white container gap-20 flex-wrap">
        <div>
          <h3 className="font-bold sm:text-3xl text-2xl text-right">
            HỖ TRỢ MUA XE VINFAST TRẢ GÓP ĐẾN 85%
          </h3>
          <h4 className="sm:text-lg text-base mt-2 text-right">
            LÃI SUẤT THẤP - THỦ TỤC NHANH CHÓNG
          </h4>
        </div>
        <a
          href="tel:0333122512"
          className="flex items-center gap-x-2 py-3 px-6 shadow-lg bg-white text-primary sm:text-2xl text-lg font-bold !gap-2 !rounded-md sm:w-fit w-full"
        >
          <FaPhoneAlt />
          0333122512
        </a>
      </div>
    </section>
  );
};

export default SupportBuyersSection;

import FirstBanner from "@/components/first-banner";
import QuickConsultForm from "@/components/public-layout/quick-consult-form";
import { linkConstants } from "@/data/constants";
import { BsDot } from "react-icons/bs";

export const generateMetadata = () => {
  return {
    title: "Liên Hệ VinFast An Giang - Hỗ Trợ Tư Vấn Nhanh Chóng",
    description:
      "Liên hệ ngay với VinFast An Giang để được tư vấn chi tiết về các dòng xe, chính sách mua bán, bảo hành, bảo dưỡng và các chương trình ưu đãi mới nhất.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.contact}`,
    },
  };
};

const titleClasses = "text-primary uppercase font-bold text-2xl mb-3";

const infos = [
  {
    title: "Địa chỉ",
    content: "2699 Trần Hưng Đạo, P. Mỹ Thạch, Thành phố Long Xuyên, An Giang",
  },
  {
    title: "Số điện thoại",
    link: "tel:0822220088",
    content: "0822 220 088 (Mr.Dương)",
  },
  {
    title: "Email",
    link: "mailto:vinfast3sangiang@gmail.com",
    content: "vinfast3sangiang@gmail.com",
  },
  {
    title: "Website",
    link: "https://vinfastangiang.com.vn",
    content: "https://vinfastangiang.com.vn",
  },
];

const ContactPage = () => {
  return (
    <div className="text-textColor">
      <FirstBanner
        heading="LIÊN HỆ CHÚNG TÔI"
        subHeading="Hoặc ghé thăm trực tiếp đại lý VinFast An Giang"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-[50%_50%] !bg-cover"
      />
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-9 max-[846px]:grid-cols-1">
          <div className="space-y-11">
            <div>
              <h1 className={titleClasses}>VinFast An Giang</h1>
              <ul>
                {infos.map((info, index) => (
                  <li key={index} className="flex items-center gap-2 py-2">
                    <p className="flex items-center gap-1">
                      <BsDot size={24} className="-ml-2" />
                      <span className="font-bold">{info.title}: </span>
                      {info.link ? (
                        <a href={info.link} className="hover:text-primary">
                          {info.content}
                        </a>
                      ) : (
                        <span>{info.content}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={titleClasses}>Thời gian hoạt động</h2>
              <div className="contact-table">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="font-bold">
                      <td>Ngày trong tuần</td>
                      <td>Kinh doanh</td>
                      <td>Dịch vụ</td>
                    </tr>
                    <tr>
                      <td>Thứ 2 - Thứ 6</td> <td>08:00 - 19:00</td>
                      <td>08:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Thứ 7</td> <td>08:00 - 19:00</td>
                      <td>08:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Chủ nhật</td> <td>08:00 - 17:00</td> <td>Nghỉ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.5916644556087!2d106.81774379999999!3d10.8871139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8b4b360afe5%3A0xac379557e685ddc5!2zNDRjIFhhIGzhu5kgSMOgIE7hu5lpLCBCw6xuaCBBbiwgRMSpIEFuLCBCw6xuaCBExrDGoW5n!5e1!3m2!1svi!2s!4v1740457116810!5m2!1svi!2s"
              className="w-full h-full max-[846px]:aspect-video rounded-md shadow-md"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-16">
          <QuickConsultForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import {
  footerCol1,
  footerCol2,
  footerCol3,
  footerCol32,
  footerCol4,
} from "@/data";
import Link from "next/link";
import NextImage from "../next-image";
import FooterForm from "./footer-form";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container flex flex-wrap gap-1 py-10 max-[1017px]:gap-3">
        {/* Column1 */}
        <div className="w-1/3 pr-3 max-[1017px]:w-[50%] max-[717px]:w-full">
          {/* General info */}
          <p className="footer-title">VINFAST AN GIANG</p>
          <ul>
            {footerCol1.map((item, index) => (
              <li className="footer-item hover:font-normal" key={index}>
                {item}
              </li>
            ))}
          </ul>

          {/* Social */}
          <p className="footer-title mt-12 max-[717px]:mt-6">
            Liên hệ với chúng tôi
          </p>
          <ul>
            {footerCol4.map((item, index) => (
              <li key={index} className="footer-item">
                <a href={item.link} className="flex items-center gap-1">
                  {item.icon({ size: 14 })} {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex item-center gap-2 my-3">
            <a
              href="https://www.facebook.com/people/VinFast-An-Giang-0822220088/61557426075220/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <div className="footer-icon">
                <NextImage
                  src="/images/home/facebook.jpg"
                  alt="VinFast An Giang Facebook"
                />
              </div>
            </a>

            <Link
              href="https://www.youtube.com/@vinfastofficial8424"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <div className="footer-icon">
                <NextImage
                  src="/images/home/youtube.png"
                  alt="VinFast An Giang Youtube"
                />
              </div>
            </Link>

            <Link
              href="https://www.tiktok.com/@tran..viet"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <div className="footer-icon">
                <NextImage
                  src="/images/home/tiktok.png"
                  alt="VinFast An Giang TikTok"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Column2 */}
        <div className="w-[18%] px-3 max-[717px]:w-[45%] max-[717px]:px-0">
          <p className="footer-title">Sản phẩm</p>
          <ul>
            {footerCol2.map((car, index) => (
              <li key={index} className="footer-item">
                <Link href={car.link}>{car.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column3 */}
        <div className="w-[20%] px-3 max-[1017px]:w-[25%] max-[717px]:w-[45%] max-[717px]:px-0">
          <p className="footer-title">Thông tin</p>
          <ul>
            {footerCol3.map((item, index) => (
              <li key={index} className="footer-item">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <p className="footer-title mt-12">Chính sách</p>
          <ul>
            {footerCol32.map((item, index) => (
              <li key={index} className="footer-item">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex-1">
          <p className="footer-title">Tư vấn nhanh</p>
          <FooterForm />
        </div>
      </div>

      <div className="border-t border-[#999999] py-1">
        <div className="container text-[#999999] text-xs flex items-center justify-between">
          <span className="uppercase my-2 text-center">
            © {new Date().getFullYear()} VinFast An Giang - All rights reserved
          </span>

          <span>
            Được thiết kế & bảo trì bởi&nbsp;
            <a
              href="https://github.com/GiangLe1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold underline"
            >
              Giang Le
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

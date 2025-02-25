import Link from "next/link";
import SectionTitle from "./section-title";
import { socialItems } from "@/data";
import NextImage from "../next-image";

const VideosSection = () => {
  return (
    <section>
      <p className="text-textColor text-center font-bold text-sm mb-2">
        THEO DÕI
      </p>
      <SectionTitle title="VINFAST SUỐI TIÊN" />

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {socialItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-16 h-16 relative">
              <NextImage
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover rounded-full border-2 border-gray-300"
              />
            </div>
            <p className="text-sm font-bold text-gray-700">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideosSection;

import Link from "next/link";
import SectionTitle from "./section-title";

const VideosSection = () => {
  return (
    <section>
      <p className="text-textColor text-center font-bold text-sm mb-2">
        VIDEO GIỚI THIỆU
      </p>
      <SectionTitle title="VINFAST 2025" />

      <div className="mt-14 space-y-10">
        <div>
          <div className="w-full aspect-video mb-3">
            <iframe
              src="https://www.youtube.com/embed/AucqJOJ4i1k"
              title="Tuyệt tác công nghệ dẫn đầu VF9"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md"
              loading="lazy"
            ></iframe>
          </div>
          <Link href="/vf9">
            <h3 className="text-center text-primary font-bold text-lg">
              Tuyệt tác công nghệ dẫn đầu VF9
            </h3>
            <p className="text-sm font-semibold text-secondary underline text-center mt-1">
              Xem ngay
            </p>
          </Link>
        </div>

        <div>
          <div className="w-full aspect-video mb-3">
            <iframe
              src="https://www.youtube.com/embed/0JGQBuHfL7M"
              title='VF3 "CHẤT RIÊNG, RẤT NGẦU"'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md"
              loading="lazy"
            ></iframe>
          </div>
          <Link href="/vf3">
            <h3 className="text-center text-primary font-bold text-lg">
              VF3 - Chất riêng, chất ngầu
            </h3>
            <p className="text-sm font-semibold text-secondary underline text-center mt-1">
              Xem ngay
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;

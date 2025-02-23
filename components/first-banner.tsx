import { FC } from "react";

interface Props {
  heading: string;
  subHeading: string;
  bgImg: string;
  bgClasses?: string;
}

const FirstBanner: FC<Props> = ({ heading, subHeading, bgImg, bgClasses }) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center gap-2 text-white aspect-[5] max-[650px]:py-2 ${bgClasses} before:absolute before:inset-0 before:bg-black before:opacity-50`}
      style={{ background: `url('${bgImg}')`, backgroundRepeat: "no-repeat" }}
    >
      <h1 className="font-bold uppercase text-3xl relative z-10 max-[650px]:text-xl">
        {heading}
      </h1>
      <span className="text-xl relative z-10 max-w-[80%] text-center max-[650px]:text-base">
        {subHeading}
      </span>
    </div>
  );
};

export default FirstBanner;

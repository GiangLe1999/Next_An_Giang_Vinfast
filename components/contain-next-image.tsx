import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ContainNextImage: FC<Props> = ({ src, alt, className, priority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      sizes="100vw"
      style={{
        objectFit: "contain",
        objectPosition: "center",
      }}
      className={className}
      priority={priority}
    />
  );
};

export default ContainNextImage;

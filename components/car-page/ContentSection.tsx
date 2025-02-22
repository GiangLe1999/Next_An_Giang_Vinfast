"use client";

import { FC, useState, useCallback } from "react";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import Image from "next/image";

interface Props {
  content: string;
}

const ContentSection: FC<Props> = ({ content }) => {
  const [aspectRatio, setAspectRatio] = useState<number | undefined>(undefined);

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.currentTarget;
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      setAspectRatio(naturalWidth / naturalHeight);
    },
    []
  );

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === "img") {
        return (
          <div
            className="w-full relative"
            style={{
              aspectRatio: aspectRatio ? aspectRatio.toString() : undefined,
            }}
          >
            <img
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              onLoad={handleImageLoad}
              style={{ display: "none" }}
            />
            {aspectRatio && (
              <Image
                src={domNode.attribs.src}
                alt={domNode.attribs.alt}
                fill={true}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                unoptimized
                className="w-full h-full rounded-md"
              />
            )}
          </div>
        );
      }
    },
  };

  return (
    <div id="car-content" className="prose postContent overflow-hidden">
      {parse(content || "", options)}
    </div>
  );
};

export default ContentSection;

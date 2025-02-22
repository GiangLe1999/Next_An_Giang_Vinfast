import { FC } from "react";
import parse from "html-react-parser";

interface Props {
  content: string;
}

const ContentSection: FC<Props> = ({ content }) => {
  return (
    <div id="car-content" className="prose postContent overflow-hidden">
      {parse(content || "")}
    </div>
  );
};

export default ContentSection;

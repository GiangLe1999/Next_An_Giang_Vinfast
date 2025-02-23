import Link from "next/link";
import { FC, FormEvent } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick?: () => void | ((e: FormEvent<Element>) => void);
  content: string;
  icon?: IconType;
  iconSize?: number;
  href?: string;
  customClasses?: string;
  type?: string;
  to?: string;
}

const BtnWithIcon: FC<Props> = ({
  onClick,
  content,
  icon,
  href,
  iconSize,
  customClasses,
  type,
  to,
}) => {
  let Component = "button" as any;
  if (!onClick && href) {
    Component = "a" as any;
  }

  if (!onClick && to) {
    Component = Link as any;
  }

  return (
    <Component
      href={href || to}
      onClick={onClick}
      className={`py-2 px-4 flex items-center justify-center gap-x-1 rounded-md transition
      border border-transparent ${customClasses} hover:scale-110 duration-500`}
      type={type}
    >
      {icon && icon({ size: iconSize })}
      {content}
    </Component>
  );
};

export default BtnWithIcon;

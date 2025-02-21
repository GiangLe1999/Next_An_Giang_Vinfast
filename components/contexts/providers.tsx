import { FC } from "react";
import { NextAuthProvider } from "./next-auth-provider";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }: Props) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};

export default Providers;

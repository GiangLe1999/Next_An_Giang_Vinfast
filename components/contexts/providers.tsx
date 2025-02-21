import { FC } from "react";
import { NextAuthProvider } from "./next-auth-provider";
import ReactQueryProvider from "./react-query-provider";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }: Props) => {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  );
};

export default Providers;

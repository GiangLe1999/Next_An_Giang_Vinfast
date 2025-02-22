"use client";

import { FC } from "react";
import { NextAuthProvider } from "./next-auth-provider";
import ReactQueryProvider from "./react-query-provider";
import ToastProvider from "@/components/contexts/toast-provider";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }: Props) => {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        {children}
        <ToastProvider />
      </ReactQueryProvider>
    </NextAuthProvider>
  );
};

export default Providers;

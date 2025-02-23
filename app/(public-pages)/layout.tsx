import { ReactNode } from "react";
import Header from "@/components/public-layout/header";
import dynamic from "next/dynamic";
import MobileBottomNav from "@/components/public-layout/mobile-bottom-nav";
const Footer = dynamic(() => import("@/components/public-layout/footer"));
const MessengerBtn = dynamic(
  () => import("@/components/public-layout/messenger-btn")
);
const ContactBtns = dynamic(
  () => import("@/components/public-layout/contact-btns")
);

interface Props {
  children: ReactNode;
}

const PulbicPagesLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <ContactBtns />
      <MessengerBtn />
      <Footer />
      <MobileBottomNav />
    </>
  );
};

export default PulbicPagesLayout;

"use client";

import dynamic from "next/dynamic";

// Lazy load Toaster component
const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  {
    ssr: false, // Disable server-side rendering
  }
);

const ToastProvider = () => {
  return <Toaster position="bottom-center" reverseOrder={false} />;
};

export default ToastProvider;

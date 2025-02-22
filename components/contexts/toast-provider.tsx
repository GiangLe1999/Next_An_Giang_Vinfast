import { Toaster } from "react-hot-toast";

// Lazy load Toaster component

const ToastProvider = () => {
  return <Toaster position="bottom-center" reverseOrder={false} />;
};

export default ToastProvider;

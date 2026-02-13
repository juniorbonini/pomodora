import type { NotificationProps } from "@/types/Notification/notification";
import { Bounce, ToastContainer } from "react-toastify";

export const Notification = ({ children }: NotificationProps) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
};

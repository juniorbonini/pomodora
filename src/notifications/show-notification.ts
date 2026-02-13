import { Dialog } from "@/components/Dialog";
import { toast } from "react-toastify";

export const showNotification = {
  succes: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  warn: (message: string) => toast.warn(message),
  warning: (message: string) => toast.warning(message),
  info: (message: string) => toast.info(message),
  dimiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: (confirmation) => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};

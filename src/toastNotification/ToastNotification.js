import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();

export function ToastNotification() {
  const notify = () => {
    toast("Wow it looks awesome!", { position: toast.POSITION.TOP_LEFT });
    toast.success("success notification!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.error("error notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("info notification!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default ToastNotification;

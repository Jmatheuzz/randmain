import { toast } from "react-toastify";
export default function success(){
    toast.success("Success", {
        toastId: "customId"
    });
}
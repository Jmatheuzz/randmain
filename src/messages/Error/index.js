import { toast } from "react-toastify";
export default function error(){
    toast.error("Error", {
        toastId: "customId1"
    });
}
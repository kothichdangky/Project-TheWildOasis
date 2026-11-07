import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut(){
    const queryClient = useQueryClient();
    const {mutate: checkout, isLoading: checkLoading} = useMutation({
        mutationFn: (bookingId) => (
            updateBooking(bookingId, {
                status: "checked-out"
            })
        ),
        onSuccess:(data) => {
            toast.success(`success update ${data.id}`)
            queryClient.invalidateQueries({active: true})
        } ,
        onError:(err)=>{
            toast.error(`Error can't update ${err}`);
        }
    })
    return {checkout, checkLoading}
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate: delbook, isLoading: isDelBook } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`success delete Booking`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err)=> {
        toast.error(`Failed to delete ${err}`)
    }
  });

  return { delbook, isDelBook };
}

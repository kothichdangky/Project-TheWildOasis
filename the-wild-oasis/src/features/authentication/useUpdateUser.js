import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    // onSuccess: () => {
    onSuccess: ({ user }) => {
      toast.success("User account successfully update");
      //   queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}

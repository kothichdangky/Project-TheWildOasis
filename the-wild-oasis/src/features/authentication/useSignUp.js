import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi  } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useSignUp(){
    const {mutate:signUp, isLoading}=useMutation({
        mutationFn: signUpApi,
        onSuccess:()=>{
            toast.success("Success signup new user")
        },
        onError:(err) => {
            console.log(err.message);
        }
    })
    return{signUp, isLoading}
}
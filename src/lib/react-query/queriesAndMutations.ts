import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { createUserAccount, singInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: (user: {
            email:string,
            password:string
        }) => singInAccount(user)
    })
}
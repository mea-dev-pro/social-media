import { useQuery, useMutation, useQueryClient, useInfinitequery } from "@tanstack/react-query";
import { createUserAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const userCreateUserAccountMutation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}
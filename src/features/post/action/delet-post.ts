"use server";

import { prisma } from "@/lib/prisma";
import { actionClient } from "@/lib/safe-action";
import { POSTS } from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PostDelete } from "../schemas";

export const deletePost=actionClient.inputSchema(PostDelete).action(async({parsedInput:{id}})=>{
    await prisma.post.delete({
        where:{
            id
        }
    })
    revalidatePath(POSTS);
    redirect(POSTS)
})
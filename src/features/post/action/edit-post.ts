"use server"

import { prisma } from "@/lib/prisma"
import { actionClient } from "@/lib/safe-action"
import { POSTS } from "@/path"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PostEdit } from "../schemas"
import { parse } from "path"
import { toast } from "sonner"

export const editPost=actionClient.inputSchema(PostEdit).action(async({parsedInput:{id,title,body,status}})=>{
   
    
    
    await prisma.post.update({
        where:{
            id
        },
        data:{
            title ,
            body,
            status 
        }
        
    })
    revalidatePath(POSTS)
    redirect(POSTS)
})

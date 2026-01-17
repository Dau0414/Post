"use server"

import { PostFilter, TypeAction } from "@/lib/PostFilter"
import { prisma } from "@/lib/prisma"
import { actionClient } from "@/lib/safe-action"
import { POSTS } from "@/path"
import { revalidatePath } from "next/cache"
import * as z from "zod"
import { PostCreate } from "../schemas"


export const createPost=actionClient.inputSchema(PostCreate).action(async({parsedInput:{title,body}})=>{
    console.log("SERVER ACTION RECEIVED:", { title, body });
    try{
        
    
        await prisma.post.create({
            data:{
                title,
                body 
            }
            
        })
        revalidatePath(POSTS)
        return {
            message:"Post created successfully"
        }
       }
    catch(error){
        console.log("Error creating post:", error);
         throw new Error("Create Post:Failed to create post")
       }
})
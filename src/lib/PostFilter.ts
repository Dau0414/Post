import { ZodError } from "zod"

export type TypeAction={
    message:string,
    payLoad?:FormData
}
export const PostFilter=(error:unknown,formdata?:FormData):TypeAction=>{
    if(error instanceof ZodError || error instanceof Error){
        return {
            message:error.message,
            payLoad:formdata
        }
    }
    else{
        return {
            message:"Something went wrong",
            payLoad:formdata
        }
    }
}
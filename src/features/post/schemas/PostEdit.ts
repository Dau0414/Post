import z from "zod";

export const PostEdit=z.object({
   id:z.string(),
   status:z.enum(['IN_PROGRESS','DONE']),
    title:z.string().min(3),
    body:z.string().min(5)
});
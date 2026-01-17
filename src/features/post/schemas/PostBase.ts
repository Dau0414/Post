import z from "zod";

export const PostBase=z.object({
    title:z.string().min(3),
    body:z.string().min(5)
});
import z from "zod";

export const PostDelete=z.object({
   id:z.string()
});
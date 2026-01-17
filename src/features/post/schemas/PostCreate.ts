import z from "zod";
import { PostBase } from "./PostBase";

export const PostCreate=z.object({
    ...PostBase.shape
});

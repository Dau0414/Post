"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/features/post/action/create-post";
import SubmitButton from "./SubmitButton";
import CardWrapper from "./CardWrapper";
import { useActionState, useEffect } from "react";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod";
import { PostCreate } from "../schemas";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner";

const CreatePostForm = () => {
   const {execute,status,isPending,hasErrored,hasSucceeded}=useAction(createPost)
   const form = useForm<z.infer<typeof PostCreate>>({
    resolver: zodResolver(PostCreate),
    defaultValues: {
      title: "",
      body: "",
    },

  })
  async function onSubmit(values: z.infer<typeof PostCreate>) {
   const {title,body}=values;
   console.log(values)
   await execute({title,body})
  }
useEffect(()=>{
  if(hasSucceeded){
    form.reset()
    toast.success("Post created successfully")
  }
    //handle error
  
},[hasSucceeded,hasErrored])
  return (
    <div>
      <CardWrapper title="Create Post" description="Manage your posts">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Post"}
           
          </Button>
        </form>
      </Form>
      </CardWrapper>
    </div>
  );
};

export default CreatePostForm;

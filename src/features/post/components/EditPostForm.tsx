"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "../types/post";
import { editPost } from "../action/edit-post";
import CardWrapper from "./CardWrapper";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PostEdit } from "../schemas";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
type Props = {
  post: Post;
};
const EditPostForm = ({ post }: Props) => {
  const{execute,isPending,hasErrored,hasSucceeded}=useAction(editPost);

  const form = useForm<z.infer<typeof PostEdit>>({
    resolver: zodResolver(PostEdit),
    defaultValues: {
      id:post.id as string,
      title:post.title,
      body:post.body,
    },
  })
  function onSubmit(values: z.infer<typeof PostEdit>) {
    const {id,title,body,status}=values;
    execute({id,title,body,status})
  }

  return (
    <div>
      <CardWrapper title="Edit Post" description="Manage your posts">
       <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
       <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input   {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

       <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title"  {...field} />
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
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      
          <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DONE">DONE</SelectItem>
              <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            </SelectContent>
          </Select>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
 <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Update"}
           
          </Button>        </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default EditPostForm;

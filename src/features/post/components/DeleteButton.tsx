"use client"
import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useAction } from "next-safe-action/hooks"
import { de } from "zod/v4/locales"
import { deletePost } from "../action/delet-post"
  
type Props={
    id:string 
}
const DeleteButton = ({id}:Props) => {
    const{execute,isPending}=useAction(deletePost);
  return (
    <div>
       <CardFooter>
           
            <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button variant={'destructive'}>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            post and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={() => execute({id})} asChild>
            <Button className="text-white" variant="destructive">{isPending ? 'Deleting...' : 'Delete'}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

        </CardFooter>
    </div>
  )
}

export default DeleteButton

import { Fake_data } from "@/data"
import PostItem from "@/features/post/components/PostItem";
import { getPost } from "@/features/post/queries/get-post"
import { notFound } from "next/navigation";

interface Props{
    params:Promise<{id:string}>
}
 async function SinglePost({params}:Props) {
    const {id} = await params
    const post=await getPost(id);
    if(!post){
          notFound();
    }
  return (
    <div>
      
       <PostItem {...post} card={false}/>
    </div>
  )
}

export default SinglePost

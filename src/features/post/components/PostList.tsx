import { getPosts } from "@/features/post/queries/get-posts";
import PostItem from "@/features/post/components/PostItem";
import { Post } from "../../../../generated/prisma/client";

async function PostList  () {
    const item=await getPosts();
    console.log(item)
  return (
    <div>
       <div className="space-y-4 mt-4">
      {item.map((post)=>(
        <PostItem {...post} key={post.id}  />
      ))}
    </div>
    </div>
  )
}

export default PostList

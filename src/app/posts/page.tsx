
import Heading from "@/components/Heading";
import CreatePostForm from "@/features/post/components/CreatePostForm";

import PostList from "@/features/post/components/PostList";
import { Post } from "@/features/post/types/post";
import { Suspense } from "react";
async function Posts() {
  return (
    <div>
        <Heading title="Posts" description="This is the posts page" />
       <CreatePostForm/>
        <Suspense fallback={<p>Fetching data...</p>}>
            <PostList/>
        </Suspense>
    </div>
  )
}

export default Posts

import EditPostForm from '@/features/post/components/EditPostForm'
import { getPost } from '@/features/post/queries/get-post'
import { notFound } from 'next/navigation'
import React from 'react'
type Props = {
    params:Promise<{id:string}>
}
const EditPage =async ({params}:Props) => {
    const{id}=await params;
    const post=await getPost(id);
    if(!post){
        notFound();
    }
    console.log(post)

  return (
    <div className='mt-4'>
      <EditPostForm post={post}/>
    </div>
  )
}

export default EditPage

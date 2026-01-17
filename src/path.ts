export const ABOUT="/about"
export const POSTS="/posts"

export const SINGLE_POST=(id:string|number)=>`${POSTS}/${id}`
export const POST_EDIT=(id:string|number)=>`${SINGLE_POST(id)}/edit`
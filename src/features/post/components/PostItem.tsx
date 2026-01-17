import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { POST_EDIT, SINGLE_POST } from '@/path'
import { ArrowUpRightIcon, Edit, Edit2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Post } from '../../../../generated/prisma/client'
import { Badge } from '@/components/ui/badge'
import DeleteButton from './DeleteButton'
interface Props extends Post{
    card?:boolean
}
const PostItem = ({id,title,body,card=true,status,createdAt,updatedAt}:Props) => {
    
  return (
    <div>
      <Card className='relative'>
        <Badge className='absolute top-2 right-2' variant={status === 'DONE' ? 'default' : 'outline'}>{status}</Badge>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className={cn(card && 'line-clamp-1')}>{body}</CardDescription>
        </CardHeader>
       {card && ( <CardContent className='space-x-3'>
                <Button variant={'outline'}>
                    
                   <ArrowUpRightIcon/> <Link href={SINGLE_POST(id)}>Read More</Link>
                </Button>
                <Button variant={'default'}>
                    
                   <Edit2Icon/> <Link href={POST_EDIT(id)}>Edit</Link>
                </Button>
        </CardContent>)}
       {!card && (
        <DeleteButton id={id as string} />
       )}
      </Card>
    </div>
  )
}

export default PostItem

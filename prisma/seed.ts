import { PostStatus, PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })

export const Fake_data=[
    {
        
        title:"First Post",
        body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur dolores blanditiis delectus ut in temporibus inventore ipsam. Vitae excepturi sapiente tempora, tempore commodi quasi deserunt adipisci! Ratione, ipsum nihil.",
       status: "IN_PROGRESS" as PostStatus,
    },
    {
      
        title:"Second Post",
        body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur dolores blanditiis delectus ut in temporibus inventore ipsam. Vitae excepturi sapiente tempora, tempore commodi quasi deserunt adipisci! Ratione, ipsum nihil.",
       status: "IN_PROGRESS" as PostStatus,
    },
    {
      
        title:"Third Post",
        body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur dolores blanditiis delectus ut in temporibus inventore ipsam. Vitae excepturi sapiente tempora, tempore commodi quasi deserunt adipisci! Ratione, ipsum nihil.",
       status: "IN_PROGRESS" as PostStatus,
    }
]
const seed=async () => {
    await prisma.post.deleteMany()
    await prisma.post.createMany({
        data:Fake_data
    })

}   
seed()
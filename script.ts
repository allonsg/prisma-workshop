import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  //* Task 1
  // const result = await prisma.user.findMany();
  // console.log(result);

  //* Task 2
  // const result = await prisma.user.create({
    // data: {
    // email: 'prisma@example'
    // }
  // })

  // //* Task 3 
  // const result = await prisma.user.update({
  //   where: {
  //     email: 'prisma@example'
  //   }, 
  //   data: {
  //     name: 'Johny'
  //   }
  // })
  
  //* Task 5 
  // const result = await prisma.
  
  // console.log(result)
  // const result = await prisma.post.create({
  //    data: {
  //   title: '3331'
  //   }
  // })
  
  //* Task 6
  
  // const result = await prisma.post.update({
  //   where: {
  //     id: 1
  //   },

  //   data: {
  //     author: {
  //       connect: {id: 1}
  //     }
  //   }
  // })
  
  //* Task 7
  
  // const result = await prisma.user.findUnique({ where: { id: 1 } })
  
  //* Task 8
  
  // const result = await prisma.user.findMany({
  //   select: {
  //     name:true,
  //     email: true,
  // }})
  
  //* Task 9
  
  // const result = await prisma.user.findUnique({where: {id: 1}, include: {posts: true}})
  
  //* Task 10
  
  // const result = await prisma.user.create({
  //   data: {
  //     name: 'DON PERINION',
  //     email: 'dondon@mail.com',
  //     posts: {
  //       create: {
  //         title: 'LJ and Co.'
  //       }
  //     }
  //   }
  // })
  
  //* Task 11
  // const result = await prisma.user.findMany({
  //   where: {
  //     name: {
  //        startsWith: 'D',
  //     }
  //   }
  // })
  
  //* Task 12
  
  const result = await prisma.user.findMany({
    skip: 2,
    take: 2
  })
  
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

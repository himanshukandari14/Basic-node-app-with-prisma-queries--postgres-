import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

async function insertUser(username:string,firstName:string,lastName:string,email:string) {
    const response = await prisma.user.create({
        data:{
            username,
           
            firstName,
            lastName,
            email

        }
    })
    
}


async function getTodo(
  userId:number
) {
  const response = await prisma.todo.findMany({
    where:{
        userId:userId
    },select:{
        id:true,
        title:true,
        description:true,
        user:true
    }
  });
  console.log(response);
}

getTodo(1);
// insertUser('test','himanshu','kandari','himanshukandaari89@gmail.com');

// async function createTodo(
// ) {
//   const response = await prisma.todo.create({
//     data:{
//         title:'test',
//         description:'test',
//         userId:1
//     }
//   });
// }

// createTodo();

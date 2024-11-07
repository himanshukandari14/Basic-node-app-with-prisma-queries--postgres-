"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(username:string,firstName:string,lastName:string,email:string) {
//     const response = await prisma.user.create({
//         data:{
//             username,
//             firstName,
//             lastName,
//             email
//         }
//     })
// }
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            }, select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
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

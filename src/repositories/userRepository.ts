import { UserData } from "../services/userService.js";
import { prisma } from "./../config/database.js";

async function find(email:string) {
  return await prisma.user.findUnique({
    where: { email }
  });
}

async function insert(data: UserData) {
  await prisma.user.create({
    data
  });
}

export const userRepository={
  find,
  insert
};

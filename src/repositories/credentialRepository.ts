import { CredentialData } from "../services/credentialService.js";
import { prisma } from "./../config/database.js";

async function find(id:number) {
  return await prisma.credential.findUnique({
    where: { id }
  });
}

async function findAll(userId:number) {
    return await prisma.credential.findMany({
      where: { userId }
    });
  }

async function insert(data: CredentialData) {
  await prisma.credential.create({
    data
  });
}

async function erase(id:number) {
    await prisma.credential.delete({
      where:{id}
    });
  }
  
export const credentialRepository={
  find,findAll,insert,erase
};
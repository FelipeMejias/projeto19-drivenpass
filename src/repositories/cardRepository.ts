import { CardData } from "../services/cardService.js";
import { prisma } from "./../config/database.js";

async function find(id:number) {
  return await prisma.card.findUnique({
    where: { id }
  });
}

async function findAll(userId:number) {
    return await prisma.card.findMany({
      where: { userId }
    });
  }

async function insert(data: CardData) {
  await prisma.card.create({
    data
  });
}

async function erase(id:number) {
    await prisma.card.delete({
      where:{id}
    });
  }
  
export const cardRepository={
  find,findAll,insert,erase
};
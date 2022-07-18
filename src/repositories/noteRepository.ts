import { NoteData } from "../services/noteService.js";
import { prisma } from "./../config/database.js";


async function find(id:number) {
  return await prisma.note.findUnique({
    where: { id }
  });
}

async function findAll(userId:number) {
    return await prisma.note.findMany({
      where: { userId }
    });
  }

async function insert(data: NoteData) {
  await prisma.note.create({
    data
  });
}

async function erase(id:number) {
    await prisma.note.delete({
      where:{id}
    });
  }
  
export const noteRepository={
  find,findAll,insert,erase
};
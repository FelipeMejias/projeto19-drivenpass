import { Note } from "@prisma/client";
import { noteRepository } from "../repositories/noteRepository.js";

export type NoteData = Omit<Note,'id'>
export type NoteBody = Omit<Note,'id' | 'userId'>

async function post(data:NoteData){
  await noteRepository.insert(data)
}

async function getAll(userId:number) {
  const notes=await noteRepository.findAll(userId)
  return notes
}

async function erase(id:number) {
  await noteRepository.erase(id)
}

export const noteService={
  getAll,post,erase
}
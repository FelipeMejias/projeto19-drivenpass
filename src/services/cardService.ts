import { Card } from "@prisma/client";
import { cardRepository } from "../repositories/cardRepository.js";

export type CardData = Omit<Card,'id' >
export type CardBody = Omit<Card,'id' | 'userId'>

async function post(data:CardData){
  await cardRepository.insert(data)
}

async function get(id:number){
  
}

async function getAll(userId:number) {
    
}

async function erase(id:number) {     
  await cardRepository.erase(id)
}

export const cardService={
  get,getAll,post,erase
}
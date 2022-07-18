import { Card } from "@prisma/client";
import { cardRepository } from "../repositories/cardRepository.js";

export type CardData = Omit<Card,'id' >
export type CardBody = Omit<Card,'id' | 'userId'>

export type CardType = 'credit'|'debit'|'both';

async function post(data:CardData){
  await cardRepository.insert(data)
}

async function get(card:Object){
  //descriptografar
  return card
}

async function getAll(userId:number) {
  const cards=await cardRepository.findAll(userId)
  //descriptografar
  return cards
}

async function erase(id:number) {     
  await cardRepository.erase(id)
}

export const cardService={
  get,getAll,post,erase
}
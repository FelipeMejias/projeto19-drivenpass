import { Wifi } from "@prisma/client";
import { wifiRepository } from "../repositories/wifiRepository.js";

export type WifiData = Omit<Wifi,'id' >
export type WifiBody = Omit<Wifi,'id' | 'userId'>

async function post(data:WifiData){
  await wifiRepository.insert(data)
}

async function get(wifi:Object){
  //descriptografar
  return wifi
}
async function getAll(userId:number) {
  const wifis=await wifiRepository.findAll(userId)
  //descriptografar
  return wifis
}

async function erase(id:number) {
  await wifiRepository.erase(id)
}

export const wifiService={
  get,getAll,post,erase
}
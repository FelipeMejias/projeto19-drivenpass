import { Credential } from "@prisma/client";
import { credentialRepository } from "../repositories/credentialRepository.js";

export type CredentialData = Omit<Credential,'id' >
export type CredentialBody = Omit<Credential,'id' | 'userId'>

async function post(data:CredentialData){
  await credentialRepository.insert(data)
}

async function get(credential:Object){
  //descriptografar
  return credential
}
async function getAll(userId:number) {
  const credentials=await credentialRepository.findAll(userId)
  //descriptografar
  return credentials
}

async function erase(id:number) {
  await credentialRepository.erase(id)
}

export const credentialService={
  get,getAll,post,erase
}
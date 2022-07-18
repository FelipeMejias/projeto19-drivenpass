import { Credential } from "@prisma/client";
import { credentialRepository } from "../repositories/credentialRepository.js";

export type CredentialData = Omit<Credential,'id' >
export type CredentialBody = Omit<Credential,'id' | 'userId'>

async function post(data:CredentialData){
  await credentialRepository.insert(data)
}

async function get(id:number){
    
}
async function getAll(userId:number) {
    
}

async function erase(id:number) {
  await credentialRepository.erase(id)
}

export const credentialService={
  get,getAll,post,erase
}
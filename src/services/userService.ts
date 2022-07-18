import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'
import {v4 as uuid}  from 'uuid'
import { sessionRepository } from "../repositories/sessionRepository.js";

export type UserData = Omit<User,'id'>

async function signIn(data:UserData){
    const user=await userRepository.find(data.email)
    if(!user || !bcrypt.compareSync(data.password,user.password)) throw {type:'unauthorized',message:'wrong user or password'}

    const token=uuid()
    await sessionRepository.insert({token,userId:user.id})
    return {token}
}

async function signUp(data:UserData){
    const possibleUser=await userRepository.find(data.email)
    if(possibleUser)throw {type:'bad body', message: 'this email is already in use'}
    const hashedPassword = bcrypt.hashSync(data.password,10)
    data.password=hashedPassword
    await userRepository.insert(data)
}

export const userService={
  signIn,signUp
}
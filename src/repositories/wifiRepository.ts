import { WifiData } from "../services/wifiService.js";
import { prisma } from "./../config/database.js";


async function find(id:number) {
  return await prisma.wifi.findUnique({
    where: { id }
  });
}

async function findAll(userId:number) {
    return await prisma.wifi.findMany({
      where: { userId }
    });
  }

async function insert(data: WifiData) {
  await prisma.wifi.create({
    data
  });
}

async function erase(id:number) {
    await prisma.wifi.delete({
      where:{id}
    });
  }
  
export const wifiRepository={
  find,findAll,insert,erase
};
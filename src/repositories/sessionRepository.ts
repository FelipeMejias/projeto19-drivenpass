import { prisma } from "./../config/database.js";
import { Session } from "@prisma/client";

export type SessionData = Omit<Session,'id'>

async function find(token:String) {
  return await prisma.session.findUnique({
    where: { token }
  });
}

async function insert(data: SessionData) {
  await prisma.session.create({
    data
  });
}

export const sessionRepository={
  find,
  insert
};
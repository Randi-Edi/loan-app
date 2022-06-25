import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateClientBody } from "./client.schema";
import { createClient, findClients } from "./client.service";


export async function registerClientHandler(req: Request, res: Response) {
  const { fullName, amount } = req.body;

  try {
    
    await createClient({ fullName, amount, imageUrl: "/uploads/" + req.file?.filename });

    return res.status(StatusCodes.CREATED).send("New client created successfully");
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("Client already exists");
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export async function findClientsHandler(_: Request, res: Response) {
  const clients = await findClients();
  return res.status(StatusCodes.OK).send(clients);
}

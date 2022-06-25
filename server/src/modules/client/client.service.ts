import { Client, ClientModel } from "./client.model";


export async function createClient(client: Client) {
  return ClientModel.create(client);
}

export async function findClientById(clientId: Client["clientId"]) {
  return ClientModel.findOne({ clientId });
}

export function findClients() {
  return ClientModel.find();
}

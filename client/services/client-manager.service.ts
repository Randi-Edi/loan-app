
import { IClientRequest } from "~/typings";
import { HTTP } from "../http-common";


const SERVICE_URL = "clients";

class ClientManagerService {
  createClient(payload: FormData) {
    return HTTP.post(`${SERVICE_URL}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getClients() {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    return HTTP.get(`${SERVICE_URL}`, config);
  }
}

export default new ClientManagerService();

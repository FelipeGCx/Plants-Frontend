import { Request } from "../types";
import { HttpProvider } from "./HttpProvider";

export class ProductionService implements HttpProvider {
  async getRequest(url: string): Promise<Request> {
    const response = await fetch(url);
    return await response.json();
  }
}

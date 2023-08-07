import { Response } from "../types";
import { RequestProvider } from "./requestProvider";

export class ProductionProvider implements RequestProvider {
  async getRequest(url: string): Promise<Response> {
    const response = await fetch(url);
    return await response.json();
  }
}

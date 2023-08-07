import { RequestProvider } from "./requestProvider";

export class RequestService {
  constructor(private httpProvider: RequestProvider) {}
  async getRequest(url: string) {
    return await this.httpProvider.getRequest(url);
  }
}

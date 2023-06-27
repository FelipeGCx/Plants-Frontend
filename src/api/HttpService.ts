import { HttpProvider } from "./HttpProvider";

export class HttpService {
  constructor(private httpProvider: HttpProvider) {}
  async getRequest(url: string) {
    return await this.httpProvider.getRequest(url);
  }
}

import { Request } from "../types";

export abstract class HttpProvider {
  abstract getRequest(url: string): Promise<Request>;
  //   abstract postRequest(params: string);
  //   abstract putRequest(params: string);
  //   abstract deleteRequest(params: string);
}

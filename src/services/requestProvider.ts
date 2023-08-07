import { Response } from "../types";

export abstract class RequestProvider {
  abstract getRequest(url: string): Promise<Response>;
  //   abstract postRequest(params: string);
  //   abstract putRequest(params: string);
  //   abstract deleteRequest(params: string);
}

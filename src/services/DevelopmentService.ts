import { Response } from "../types";
import { HttpProvider } from "./HttpProvider";
import { plants, plantsFavorite } from "./mocks";
import { PLANTS, PLANTSFAVORITE } from "../constants";

export class DevelopmentService implements HttpProvider {
  async getRequest(url: string): Promise<Response> {
    switch (url) {
      case PLANTS:
        return plants;
      case PLANTSFAVORITE:
        return plantsFavorite;
      default:
        return {
          status: "error",
          message: "some failed",
          data: {},
        };
    }
  }
}

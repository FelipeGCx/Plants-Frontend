import { Response } from "../types";
import { HttpProvider } from "./HttpProvider";
import { error, plant, plants, plantsFavorite, plantsStock } from "./mocks";
import { PLANT, PLANTS, PLANTSFAVORITE, PLANTSSTOCK } from "../constants";

export class DevelopmentService implements HttpProvider {
  async getRequest(url: string): Promise<Response> {
    switch (url) {
      case PLANT:
        return plant;
      case PLANTS:
        return plants;
      case PLANTSFAVORITE:
        return plantsFavorite;
      case PLANTSSTOCK:
        return plantsStock;
      default:
        return error;
    }
  }
}

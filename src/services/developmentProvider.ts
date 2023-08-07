import { Response } from "../types";
import { RequestProvider } from "./requestProvider";
import { crystal, error, plant, plantStock, plants, plantsFavorite, plantsStock, pot } from "./mocks";
import { CRYSTAL, PLANT, PLANTS, PLANTSFAVORITE, PLANTSSTOCK, PLANTSTOCK, POT } from "../constants";

export class DevelopmentProvider implements RequestProvider {
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
      case PLANTSTOCK:
        return plantStock;
      case POT:
        return pot;
      case CRYSTAL:
        return crystal;
      default:
        return error;
    }
  }
}

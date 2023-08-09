import { Response } from "../types";
import { RequestProvider } from "./requestProvider";
import { crystal, crystalStock, crystalsFavorite, crystalsStock, error, plant, plantStock, plants, plantsFavorite, plantsStock, pot, pots, species } from "./mocks";
import { CRYSTAL, CRYSTALSFAVORITE, CRYSTALSSTOCK, CRYSTALSTOCK, PLANT, PLANTS, PLANTSFAVORITE, PLANTSSTOCK, PLANTSTOCK, POT, POTS, SPECIES } from "../constants";

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
      case POTS:
        return pots;
      case CRYSTAL:
        return crystal;
      case CRYSTALSTOCK:
        return crystalStock;
      case CRYSTALSFAVORITE:
        return crystalsFavorite;
      case CRYSTALSSTOCK:
        return crystalsStock;
      case SPECIES:
        return species;
      default:
        return error;
    }
  }
}

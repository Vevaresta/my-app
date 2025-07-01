import { ProductsService } from "../products-service";
import { FavoritesService } from "./favorites-service";


export function favoritesFactory(isFavorite:boolean) {
    return () => {
      if (isFavorite) {
        return new FavoritesService();
      }
      return new ProductsService();
    }
  }
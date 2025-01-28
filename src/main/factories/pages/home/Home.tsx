import Home from "../../../../presentation/pages/Home";
import {
  AppetizersFactory,
  BeveragesFactory,
  DessertFactory,
  HamburgerFactory,
} from "../../usecases/CuisineFactory";

export default function HomeFactory() {
  return (
    <Home
      hamburgers={HamburgerFactory()}
      desserts={DessertFactory()}
      beverages={BeveragesFactory()}
      appetizers={AppetizersFactory()}
    />
  );
}

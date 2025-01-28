import { GetItem } from "../../../data/usecases/GetItem";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const HamburgerFactory = () => {
  return new GetItem(MakeApiUrl(apiRoutes.hamburgers), MakeAxiosHttpClient());
};

export const DessertFactory = () => {
  return new GetItem(MakeApiUrl(apiRoutes.desserts), MakeAxiosHttpClient());
};

export const BeveragesFactory = () => {
  return new GetItem(MakeApiUrl(apiRoutes.beverages), MakeAxiosHttpClient());
};

export const AppetizersFactory = () => {
  return new GetItem(MakeApiUrl(apiRoutes.appetizers), MakeAxiosHttpClient());
};

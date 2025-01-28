import { PostOrder } from "../../../data/usecases/PostOrder";
import { Order } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const OrderFactory = () => {
  return new PostOrder(
    MakeApiUrl(apiRoutes.createOrder),
    MakeAxiosHttpClient<Order.Params, Order.Model>()
  );
};

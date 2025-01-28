import { OrderModel, OrderParams } from "../models";

export namespace Order {
  export type Params = OrderParams;
  export type Model = OrderModel;
}

export interface Order {
  order(params: Order.Params): Promise<Order.Model>;
}

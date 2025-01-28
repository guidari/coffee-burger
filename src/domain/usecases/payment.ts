import { PaymentModel } from "../models";

export namespace Payment {
  export type Model = PaymentModel;
}

export interface Payment {
  payment(): Promise<Payment.Model>;
}

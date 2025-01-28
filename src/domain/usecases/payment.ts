import { PaymentModel, PaymentParams } from "../models";

export namespace Payment {
  export type Model = PaymentModel;
  export type Params = PaymentParams;
}

export interface Payment {
  payment(): Promise<Payment.Model>;
}

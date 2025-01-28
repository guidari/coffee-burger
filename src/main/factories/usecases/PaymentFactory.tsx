import { GetPayment } from "../../../data/usecases/GetPayment";
import { Payment } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const PaymentFactory = () => {
  return new GetPayment(
    MakeApiUrl(apiRoutes.paymentOptions),
    MakeAxiosHttpClient<Payment.Params, Payment.Model>()
  );
};

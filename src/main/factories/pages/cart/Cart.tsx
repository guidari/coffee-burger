import Cart from "../../../../presentation/pages/Cart";
import { OrderFactory } from "../../usecases/OrderFactory";
import { PaymentFactory } from "../../usecases/PaymentFactory";

export default function CartFactory() {
  return <Cart order={OrderFactory()} payment={PaymentFactory()} />;
}

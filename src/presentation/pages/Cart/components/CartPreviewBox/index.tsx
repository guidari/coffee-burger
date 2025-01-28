import { useContext } from "react";
import { Link } from "react-router-dom";

import SelectedCoffee from "../SelectedCoffee";
import {
  CartConfirmButton,
  CartPreviewContainer,
  CartPreviewPriceSummary,
  CartPriceSummary,
  CartTotalPrice,
  EmptyCart,
} from "./style";
import { ShoppingCartContext } from "../../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../../utils/formatCashString";

export default function CartPreview() {
  const { cart } = useContext(ShoppingCartContext);
  console.log({ cart });

  let totalPrice = 3.5;
  let totalPriceNoShipping = 0;

  for (let i = 0; i < cart?.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
    totalPriceNoShipping += cart[i].price * cart[i].quantity;
  }

  return (
    <CartPreviewContainer>
      {cart?.length < 1 && <EmptyCart>O carrinho está vazio</EmptyCart>}
      {cart?.map((coffee: any) => {
        return (
          <SelectedCoffee
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            image={coffee.image}
            price={coffee.price}
            quantity={coffee.quantity}
          />
        );
      })}

      <CartPreviewPriceSummary>
        <CartPriceSummary>
          <span>Total de itens</span>
          <span>R$ {formatToBRCashString(totalPriceNoShipping)}</span>
        </CartPriceSummary>
        <CartPriceSummary>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </CartPriceSummary>
        <CartTotalPrice>
          <span>Total</span>
          <span>R$ {formatToBRCashString(totalPrice)}</span>
        </CartTotalPrice>
      </CartPreviewPriceSummary>

      <CartConfirmButton type="submit">
        <p>confirmar pedido</p>
      </CartConfirmButton>
    </CartPreviewContainer>
  );
}

import {
  EventHandler,
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { Instrunctions } from "../AdressSectionBox/style";
import PaymentType from "../PaymentType";
import { PaymentBoxContainer, PaymentTypes } from "./style";

import Money from "../../../../assets/images/money.svg";
import CreditCard from "../../../../assets/images/creditCard.svg";
import DebitCard from "../../../../assets/images/debitCard.svg";
import Cash from "../../../../assets/images/cash.svg";

export default function PaymentBox({ payment }: any) {
  const [cardSelected, setcCardSelected] = useState("Cartão de crédito");
  const [items, setItems] = useState<any>();

  function changeCard(event: FormEvent, cardType: string) {
    event.preventDefault();
    setcCardSelected(cardType);
    localStorage.setItem("coffeeDelivery-cardType", cardType);
  }

  const getPayment = async () => {
    try {
      const response = await payment.payment();
      setItems(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("coffeeDelivery-cardType", "Cartão de crédito");
    getPayment();
  }, []);

  const chooseImage = (paymentType: string) => {
    if (paymentType === "Cartão de crédito") {
      return CreditCard;
    } else if (paymentType === "Cartão de débito") {
      return CreditCard;
    } else if (paymentType === "Vale refeição") {
      return CreditCard;
    } else {
      return Cash;
    }
  };

  return (
    <PaymentBoxContainer>
      <Instrunctions>
        <img src={Money} alt="Icone de dinheiro" />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Instrunctions>

      <PaymentTypes>
        {items &&
          items.map((payment: any) => (
            <PaymentType
              key={payment.id}
              title={payment.text}
              image={chooseImage(payment.text)}
              onClick={(event: FormEvent) => changeCard(event, payment.text)}
              selected={cardSelected}
              data-testid={payment.text}
            />
          ))}
      </PaymentTypes>
    </PaymentBoxContainer>
  );
}

import { useContext, useReducer, useState } from "react";

import {
  CoffeeCardContainer,
  CoffeeImage,
  CoffeeType,
  Coffeeonatiner,
  SubTitle,
  Title,
  OrderPirceContainer,
  PriceTag,
  QuantityOrder,
  CartQuantityContainer,
  CoffeeTagsContainer,
} from "./style";

import PurpleCart from "../../../../assets/images/purpleCart.svg";
import {
  ICoffeeCart,
  ShoppingCartContext,
} from "../../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../../utils/formatCashString";
import { InputCount } from "../../../components/InputCount";
import AlertMessage from "../../../components/AlertMessage";

export interface ICoffee {
  id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  isAvaliable?: boolean;
}

interface ICoffeeItemProps {
  coffee: ICoffee;
}

interface ICoffeeItem {
  coffeeItem: ICoffee;
  count: number;
}

export default function CoffeeCard({ coffee }: ICoffeeItemProps) {
  const [count, setCount] = useState(1);
  const [messageAlert, setMessageAlert] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [severity, setSeverity] = useState("");

  const { addCoffeeToCart, cart } = useContext(ShoppingCartContext);

  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct;

    if (newCount <= 0 || newCount >= 100) {
      return;
    }

    setCount(newCount);
  }

  function handleAddOneProductUnity() {
    const newCount = count + 1;

    if (newCount >= 100) {
      setMessageAlert("Qauntidade máxima de 99");
      setSeverity("danger");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      setMessageAlert("Minimo de 1 produto");
      setSeverity("danger");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }
    setCount(newCount);
  }

  // Função responsável por repassar os dados do produto para a função //
  // na qual irá adiciona-lo ao carrinho //
  function hanldeAddToShoppingCart() {
    const coffeeItem = {
      id: coffee.id,
      title: coffee.title,
      description: coffee.description,
      image: coffee.image,
      price: coffee.price,
      tags: coffee.tags,
      quantity: count,
    };

    const cartCoffee = cart?.findIndex((c) => c.id === coffee.id);

    if (cartCoffee !== -1) {
      setMessageAlert("Este item já está em seu carrinho");
      setSeverity("danger");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    addCoffeeToCart(coffeeItem as ICoffeeCart);
    setCount(1);
    setMessageAlert("Item adicionado ao carrinho");
    setSeverity("success");
    setVisibleAlert(true);
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  }

  return (
    <CoffeeCardContainer>
      <Coffeeonatiner>
        <CoffeeImage src={coffee?.image} alt={coffee?.title} />
      </Coffeeonatiner>

      <CoffeeTagsContainer>
        {coffee?.tags.map((tag) => {
          return <CoffeeType key={tag}>{tag}</CoffeeType>;
        })}
      </CoffeeTagsContainer>

      <Title>{coffee?.title}</Title>
      <SubTitle>{coffee?.description}</SubTitle>

      <OrderPirceContainer>
        <PriceTag>
          R$<span>{formatToBRCashString(coffee?.price)}</span>
        </PriceTag>
        <CartQuantityContainer>
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />
          <button onClick={hanldeAddToShoppingCart} data-testid="addCart">
            <img src={PurpleCart} alt="Carrinho" />
          </button>
        </CartQuantityContainer>
      </OrderPirceContainer>
      {visibleAlert && (
        <AlertMessage
          message={messageAlert}
          severity={severity}
          visibility={true}
        />
      )}
    </CoffeeCardContainer>
  );
}

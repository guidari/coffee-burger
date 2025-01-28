import { useContext, useEffect, useReducer, useState } from "react";

import {
  CuisineCardContainer,
  CuisineImage,
  CuisineType,
  Cuisineonatiner,
  SubTitle,
  Title,
  OrderPirceContainer,
  PriceTag,
  QuantityOrder,
  CartQuantityContainer,
  CuisineTagsContainer,
} from "./style";

import PurpleCart from "../../../../assets/images/purpleCart.svg";
import {
  ICuisineCart,
  ShoppingCartContext,
} from "../../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../../utils/formatCashString";
import { InputCount } from "../../../components/InputCount";
import AlertMessage from "../../../components/AlertMessage";

export interface ICuisine {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string;
  values?: {
    small: number | null;
    large: number | null;
  };
  value?: number;
}

interface ICuisineItemProps {
  cuisine: ICuisine;
}

interface ICuisineItem {
  cuisineItem: ICuisine;
  count: number;
}

export default function CuisineCard({ cuisine }: any) {
  const [count, setCount] = useState(1);
  const [messageAlert, setMessageAlert] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [severity, setSeverity] = useState("");

  const { addCuisineToCart, cart } = useContext(ShoppingCartContext);

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

  let cuisinePrice: number;
  let cuisineImage: string;

  if (cuisine.values) {
    if (cuisine.values.single) {
      cuisinePrice = cuisine.values.single;
    } else cuisinePrice = cuisine.values.small;
  } else {
    cuisinePrice = cuisine.value;
  }

  if (typeof cuisine.image === "string") {
    cuisineImage = cuisine.image;
  } else {
    cuisineImage = cuisine.image[0];
  }

  // Função responsável por repassar os dados do produto para a função //
  // na qual irá adiciona-lo ao carrinho //
  function hanldeAddToShoppingCart() {
    const cuisineItem = {
      id: cuisine.id,
      title: cuisine.title,
      description: cuisine.description,
      image: cuisineImage,
      price: cuisinePrice,
      tags: cuisine.tags,
      quantity: count,
    };

    const cartCuisine = cart?.findIndex((c) => c.id === cuisine.id);

    if (cartCuisine !== -1) {
      setMessageAlert("Este item já está em seu carrinho");
      setSeverity("danger");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    addCuisineToCart(cuisineItem as ICuisineCart);
    setCount(1);
    setMessageAlert("Item adicionado ao carrinho");
    setSeverity("success");
    setVisibleAlert(true);
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  }

  return (
    <CuisineCardContainer>
      <Cuisineonatiner>
        <CuisineImage src={cuisineImage} alt={cuisine?.title} />
      </Cuisineonatiner>

      <CuisineTagsContainer>
        <CuisineType>{cuisine.tags}</CuisineType>
      </CuisineTagsContainer>

      <Title>{cuisine?.title}</Title>
      <SubTitle>{cuisine?.description}</SubTitle>

      <OrderPirceContainer>
        <PriceTag>
          R$<span>{formatToBRCashString(cuisinePrice)}</span>
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
    </CuisineCardContainer>
  );
}

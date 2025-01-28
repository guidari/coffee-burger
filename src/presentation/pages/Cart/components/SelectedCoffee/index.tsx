import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import Cart from "../..";
import {
  ActionButtonsContainer,
  ContainerNamePrice,
  InfoContainer,
  RemoveCoffee,
  SelectedCoffeeContainer,
  SelectedCoffeeImage,
  SelectedPriceCoffee,
  SelectedQuantityCoffee,
} from "./style";
import { ShoppingCartContext } from "../../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../../utils/formatCashString";
import { InputCount } from "../../../components/InputCount";
import AlertMessage from "../../../components/AlertMessage";

interface ISelectedCoffee {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export default function SelectedCoffee({
  id,
  title,
  image,
  price,
  quantity,
}: ISelectedCoffee) {
  const [count, setCount] = useState(quantity);
  const [messageAlert, setMessageAlert] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);

  console.log({ count });

  const { removeCoffee, insertMoreCoffee } = useContext(ShoppingCartContext);

  const coffeePrice = price * count;

  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct;
    console.log({ newCount });

    if (newCount <= 0 || newCount >= 100) {
      return;
    }

    setCount(newCount);
  }

  function handleAddOneProductUnity() {
    const newCount = count + 1;

    if (newCount >= 100) {
      setMessageAlert("Qauntidade máxima de 99");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }
    console.log("id", id, "count", count, "newCount", newCount);

    insertMoreCoffee(id, count, 1);
    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      setMessageAlert("Minimo de 1 produto");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    console.log("id", id, "count", count, "newCount", newCount);
    insertMoreCoffee(id, count, -1);
    setCount(newCount);
  }

  function removeSelectedCoffee() {
    removeCoffee(id);
  }

  return (
    <SelectedCoffeeContainer key={id}>
      <SelectedCoffeeImage>
        <img src={image} alt={title} />
      </SelectedCoffeeImage>
      <InfoContainer>
        <ContainerNamePrice>
          <SelectedQuantityCoffee>{title}</SelectedQuantityCoffee>
          <SelectedPriceCoffee>
            R$ {formatToBRCashString(coffeePrice)}
          </SelectedPriceCoffee>
        </ContainerNamePrice>

        <ActionButtonsContainer>
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />
          <RemoveCoffee
            onClick={removeSelectedCoffee}
            data-testid="removeCoffee"
          >
            <Trash color="purple" />
            <span>remover</span>
          </RemoveCoffee>
        </ActionButtonsContainer>
      </InfoContainer>

      {visibleAlert && (
        <AlertMessage
          message={messageAlert}
          severity="danger"
          visibility={true}
        />
      )}
    </SelectedCoffeeContainer>
  );
}

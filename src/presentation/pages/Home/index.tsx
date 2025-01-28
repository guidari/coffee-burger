import CoffeeCard from "./components/CoffeeCard";
import InfoTextGrid from "./components/InfoTextGrid";
import {
  BannerContainer,
  CoffeesGird,
  HomeContainer,
  InfoCoffeeGrid,
  InfoContainer,
  SubTitle,
  Title,
} from "./style";

import CartCircle from "../../assets/images/cartCircle.svg";
import Package from "../../assets/images/package.svg";
import Timer from "../../assets/images/timer.svg";
import CoffeeCircle from "../../assets/images/coffeeCircle.svg";
import Banner from "../../assets/images/banner.svg";
import Burger2 from "../../assets/images/burger2.jpg";
import { coffeesList } from "../../api/coffeeMock";
import AlertMessage from "../components/AlertMessage";

import { MakeStorageAdapter } from "../../../main/factories/cache";
import CuisinesCard from "./components/CuisinesCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface User {
  userName?: string;
}

interface ICuisineFactory {
  hamburgers: any;
  desserts: any;
  beverages: any;
  appetizers: any;
}

export default function Home({
  hamburgers,
  desserts,
  beverages,
  appetizers,
}: ICuisineFactory) {
  const navigate = useNavigate();

  const user: User = MakeStorageAdapter().get("account");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <HomeContainer>
      <AlertMessage
        severity="success"
        visibility
        message={`Olá ${user?.userName}`}
      />
      <InfoContainer>
        <div>
          <Title>
            Encontre a combinação perfeita para qualquer hora do dia
          </Title>
          <SubTitle>
            Com o Coffee Burger você recebe seu hambúrguer onde estiver, a
            qualquer hora
          </SubTitle>
          <InfoCoffeeGrid>
            <InfoTextGrid title="Compra simples e segura" image={CartCircle} />
            <InfoTextGrid title="Embalagem de qualidade" image={Package} />
            <InfoTextGrid title="Entrega rápida e rastreada" image={Timer} />
            <InfoTextGrid
              title="O café chega fresquinho até você"
              image={CoffeeCircle}
            />
          </InfoCoffeeGrid>
        </div>
        <BannerContainer>
          <img
            src={Burger2}
            alt="Imagem com um copo de café e grãos de café em volta"
            width={476}
            height={360}
            style={{ borderRadius: 1000 }}
          />
        </BannerContainer>
      </InfoContainer>

      <h2 id="main">Hamburgers</h2>
      <CoffeesGird>
        <CuisinesCard cuisines={hamburgers} tag="hamburger" />
      </CoffeesGird>

      <h2 id="main">Aperitivos</h2>
      <CoffeesGird>
        <CuisinesCard cuisines={appetizers} tag="hamburger" />
      </CoffeesGird>

      <h2 id="main">Bebidas</h2>
      <CoffeesGird>
        <CuisinesCard cuisines={beverages} tag="Beverages" />
      </CoffeesGird>

      <h2 id="main">Sobremesas</h2>
      <CoffeesGird>
        <CuisinesCard cuisines={desserts} tag="Desserts" />
      </CoffeesGird>

      <h2 id="main">Cafés</h2>

      <CoffeesGird>
        {coffeesList.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeesGird>
    </HomeContainer>
  );
}

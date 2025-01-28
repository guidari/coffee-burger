import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./components/Button";
import CartButton from "../CartButton";
import { HeaderCart, HeaderContainer, Logo } from "./style";

import LogoImage from "../../../assets/images/Logo.svg";
import PurpleLocation from "../../../assets/images/purpleLocation.svg";
import AlertMessage from "../AlertMessage";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

export default function Header() {
  const { cart } = useContext(ShoppingCartContext);
  const [visibleAlert, setVisibleAlert] = useState(false);

  function warning() {
    setVisibleAlert(true);
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  }

  return (
    <HeaderContainer>
      <div>
        <a
          href="#main"
          title="ir para o conteudo da página"
          style={{ opacity: 0, fontSize: 0.001 }}
          data-testid="mainContent"
        >
          ir para o conteudo da página
        </a>
        <NavLink to={"/"} data-testid="logoLink">
          <Logo src={LogoImage} alt="logo" />
        </NavLink>
      </div>

      <HeaderCart>
        <Button title="São Paulo, SP" image={PurpleLocation} />

        {cart?.length < 1 ? (
          <CartButton onClick={warning} data-testid="cart" />
        ) : (
          <NavLink to={"/cart"} data-testid="cart">
            <CartButton />
          </NavLink>
        )}
      </HeaderCart>
      {visibleAlert && (
        <AlertMessage
          message="Adicione um item ao carrinho"
          severity="danger"
          visibility={true}
        />
      )}
    </HeaderContainer>
  );
}

import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import CartButton, { ICartButton } from "./index";
import cartImage from "../../assets/images/cart.svg";
import { ItemsAmount } from "./style";
import { ShoppingCartProvider } from "../../../../context/ShoppingCartContext";

export default {
  title: "Components/CartButton",
  component: CartButton,
  args: {
    image: cartImage,
  },
  decorators: [
    (Story) => {
      return (
        <ShoppingCartProvider>
          <div style={{ width: "100%" }}>{Story()}</div>
        </ShoppingCartProvider>
      );
    },
  ],
} as Meta<ICartButton>;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};

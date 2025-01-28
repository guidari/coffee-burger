import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import Header from "./index";
import cartImage from "../../assets/images/cart.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderContainer } from "./style";
import { ShoppingCartProvider } from "../../../../context/ShoppingCartContext";

const cart = ["1", "2"];

export default {
  title: "Components/Header",
  component: Header,

  // args: {
  //   cart: ["1", "2"],
  // },
  argTypes: { cart: [] },

  decorators: [
    (Story) => {
      return (
        <ShoppingCartProvider>
          <BrowserRouter>
            <div style={{ width: "80%" }}>{Story()}</div>
          </BrowserRouter>
        </ShoppingCartProvider>
      );
    },
  ],
} as Meta;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};

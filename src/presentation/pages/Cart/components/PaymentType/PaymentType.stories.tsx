import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import PaymentType, { IPaymentType } from "./index";
import CreditCardImage from "../../../../assets/images/creditCard.svg";
import DebitCardImage from "../../../../assets/images/debitCard.svg";
import CashImage from "../../../../assets/images/cash.svg";

export default {
  title: "Cart/Components/PaymentType",
  component: PaymentType,

  decorators: [
    (Story) => {
      return <div style={{ width: "193px" }}>{Story()}</div>;
    },
  ],
} as Meta<IPaymentType>;

export const CreditCard: StoryObj<IPaymentType> = {
  args: {
    title: "credit",
    image: CreditCardImage,
  },
  argTypes: {
    selected: {
      options: ["credit", "other"],
      control: { type: "select" },
    },
  },
};
export const DebitCard: StoryObj<IPaymentType> = {
  args: {
    title: "debit",
    image: DebitCardImage,
  },
  argTypes: {
    selected: {
      options: ["debit", "other"],
      control: { type: "select" },
    },
  },
};

export const Cash: StoryObj<IPaymentType> = {
  args: {
    title: "cash",
    image: CashImage,
  },
  argTypes: {
    selected: {
      options: ["cash", "other"],
      control: { type: "select" },
    },
  },
};

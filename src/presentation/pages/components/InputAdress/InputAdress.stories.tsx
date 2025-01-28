import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import InputAdress from "./index";
import cartImage from "../../assets/images/cart.svg";
import { FormProvider, useForm } from "react-hook-form";
import { AdressFormData } from "../../Cart";

const Wrapper = (props: any) => {
  const formMethods = useForm<AdressFormData>();

  return <FormProvider {...formMethods}>{props.children}</FormProvider>;
};

export default {
  title: "Components/InputAdress",
  component: InputAdress,
  args: {
    placeholder: "Titulo",
    registerName: "titulo",
    type: "input",
  },

  // decorators: [
  //   (Story) => {
  //     return <div style={{ width: "150px" }}>{Story()}</div>;
  //   },
  // ],
  decorators: [
    (Story) => {
      return (
        <Wrapper>
          <div style={{ width: "200px" }}>{Story()}</div>
        </Wrapper>
      );
    },
  ],
} as Meta;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};

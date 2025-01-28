import { Meta, StoryObj } from "@storybook/react";
import AlertMessage, { IAlerMessage } from "./index";

export default {
  title: "Components/AlertMessage",
  component: AlertMessage,
  args: {
    message: "Alert message to be displayed",
    severity: "success",
    visibility: true,
  },
} as Meta<IAlerMessage>;

export const Success: StoryObj<IAlerMessage> = {
  args: {
    message: "Success - Alert message to be displayed",
    severity: "success",
    visibility: true,
  },
};
export const Danger: StoryObj<IAlerMessage> = {
  args: {
    message: "Error - Alert message to be displayed",
    severity: "danger",
    visibility: true,
  },
};

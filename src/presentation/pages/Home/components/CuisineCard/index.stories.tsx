import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import CuisineCard, { ICuisine } from "./index";
import CuisineImage from "../../../../assets/images/cuisines/tradicional-express.png";
import { ShoppingCartProvider } from "../../../../../context/ShoppingCartContext";

export default {
  title: "Home/Components/CuisineCard",
  component: CuisineCard,
  args: {
    cuisine: {
      id: 1,
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 10.9,
      tags: ["Tradicional"],
      image: CuisineImage,
      isAvaliable: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <ShoppingCartProvider>
          <div style={{ width: "270px", marginTop: "20px" }}>{Story()}</div>
        </ShoppingCartProvider>
      );
    },
  ],
} as Meta<ICuisine>;

export const Default = {};

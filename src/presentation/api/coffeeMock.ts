// Images //
import AmericanExpressImage from "../assets/images/coffees/american-express.png";
import TradicionalExpressImage from "../assets/images/coffees/tradicional-express.png";
import ArabianCoffeeImage from "../assets/images/coffees/arabian-coffee.png";
import CapuccinoImage from "../assets/images/coffees/capuccino.png";
import CoffeeWithMilkImage from "../assets/images/coffees/coffee-with-milk.png";
import CreamyExpressImage from "../assets/images/coffees/creamy-express.png";
import CubanCoffeeImage from "../assets/images/coffees/cuban-coffee.png";
import HawaiianCoffeeImage from "../assets/images/coffees/hawaiian-coffee.png";
import HotCoffeeImage from "../assets/images/coffees/hot-chocolate.png";
import IceExpressImage from "../assets/images/coffees/ice-express.png";
import IrishCoffeeImage from "../assets/images/coffees/irish-coffee.png";
import LatteImage from "../assets/images/coffees/latte.png";
import MacchiatoImage from "../assets/images/coffees/macchiato.png";
import MocaccinoImage from "../assets/images/coffees/mocaccino.png";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  isAvaliable?: boolean;
}

export const coffeesList: Coffee[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["tradicional"],
    image: TradicionalExpressImage,
    isAvaliable: true,
  },
  {
    id: "2",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 8.9,
    tags: ["tradicional"],
    image: AmericanExpressImage,
    isAvaliable: true,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 12.9,
    tags: ["tradicional"],
    image: CreamyExpressImage,
    isAvaliable: true,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 10.9,
    tags: ["tradicional", "gelado"],
    image: IceExpressImage,
    isAvaliable: true,
  },
  // {
  //   id: 5,
  //   title: "Café com Leite",
  //   description: "Meio a meio de expresso tradicional com leite vaporizado",
  //   price: 10.9,
  //   tags: ["tradicional", "com leite"],
  //   image: CoffeeWithMilkImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 6,
  //   title: "Latte",
  //   description:
  //     "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  //   price: 13.9,
  //   tags: ["tradicional", "com leite"],
  //   image: LatteImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 7,
  //   title: "Capuccino",
  //   description:
  //     "Bebida com canela feita de doses iguais de café, leite e espuma",
  //   price: 15.9,
  //   tags: ["tradicional", "com leite"],
  //   image: CapuccinoImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 8,
  //   title: "Macchiato",
  //   description:
  //     "Café expresso misturado com um pouco de leite quente e espuma",
  //   price: 14.9,
  //   tags: ["tradicional", "com leite"],
  //   image: MacchiatoImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 9,
  //   title: "Mocaccino",
  //   description: "Café expresso com calda de chocolate, pouco leite e espuma",
  //   price: 17.9,
  //   tags: ["tradicional", "com leite"],
  //   image: MocaccinoImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 10,
  //   title: "Chocolate Quente",
  //   description: "Bebida feita com chocolate dissolvido no leite quente e café",
  //   price: 10.9,
  //   tags: ["especial", "com leite"],
  //   image: HotCoffeeImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 11,
  //   title: "Cubano",
  //   description:
  //     "Drink gelado de café expresso com rum, creme de leite e hortelã",
  //   price: 13.9,
  //   tags: ["especial", "alcoólico", "gelado"],
  //   image: CubanCoffeeImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 12,
  //   title: "Havaiano",
  //   description: "Bebida adocicada preparada com café e leite de coco",
  //   price: 19.9,
  //   tags: ["especial"],
  //   image: HawaiianCoffeeImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 13,
  //   title: "Árabe",
  //   description: "Bebida preparada com grãos de café árabe e especiarias",
  //   price: 25.9,
  //   tags: ["especial"],
  //   image: ArabianCoffeeImage,
  //   isAvaliable: true,
  // },
  // {
  //   id: 14,
  //   title: "Irlandês",
  //   description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  //   price: 22.9,
  //   tags: ["especial", "alcoólico"],
  //   image: IrishCoffeeImage,
  //   isAvaliable: true,
  // },
];

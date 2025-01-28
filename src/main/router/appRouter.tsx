import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

import OrderInfo from "../../presentation/pages/OrderInfo";
import LoginFactory from "../factories/pages/login/Login";
import HomeFactory from "../factories/pages/home/Home";
import CartFactory from "../factories/pages/cart/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomeFactory />} />
        <Route path="/cart" element={<CartFactory />} />
        <Route path="/orderInfo" element={<OrderInfo />} />
      </Route>
      <Route path="/login" element={<LoginFactory />} />
    </Routes>
  );
}

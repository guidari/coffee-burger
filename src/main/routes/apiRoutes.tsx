const baseUrl = "https://burgerlivery-api.vercel.app";

export const apiRoutes = {
  login: `${baseUrl}/user/login`,
  hamburgers: `${baseUrl}/hamburgers`,
  appetizers: `${baseUrl}/appetizers`,
  desserts: `${baseUrl}/desserts`,
  beverages: `${baseUrl}/beverages`,
  paymentOptions: `${baseUrl}/payment/options`,
  createOrder: `${baseUrl}/order/create-order`,
};

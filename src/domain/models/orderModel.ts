export type OrderModel = {
  id: string;
  value: number;
  text: string;
};

export type OrderParams = {
  items: [
    {
      title: string;
      value: number;
    }
  ];
  paymentOption: string;
};

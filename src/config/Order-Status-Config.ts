import { StatusType } from "@/types/types";

type OrderStatusConfig = {
  label: StatusType;
  value: number;
}[];

export const OrderStatusConfig: OrderStatusConfig = [
  {
    label: "placed",
    value: 0,
  },
  {
    label: "paid",
    value: 25,
  },
  {
    label: "inProgress",
    value: 50,
  },
  {
    label: "outForDelivery",
    value: 75,
  },
  {
    label: "delivered",
    value: 100,
  },
];

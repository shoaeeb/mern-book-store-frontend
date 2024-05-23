import { OrderStatusConfig } from "@/config/Order-Status-Config";
import { OrderType } from "@/types/types";
import { Progress } from "./ui/progress";

type Props = {
  order: OrderType;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getOrderStatusInfo = () => {
    return OrderStatusConfig.find((item) => item.label === order.status);
  };
  return (
    <div className="flex flex-col gap-4">
      <Progress className="animate-pulse" value={getOrderStatusInfo()?.value} />
      <p className="text-sm font-bold">Status:{order.status}</p>
    </div>
  );
};

export default OrderStatusHeader;

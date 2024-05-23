import { OrderType } from "@/types/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import OrderStatusHeader from "./OrderStatusHeader";

type Props = {
  order: OrderType;
};

const OrderCard = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader>
        <OrderStatusHeader order={order} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col  border border-slate-100">
          <div>
            <p className="text-sm">{order.user.name}</p>
            <p className="text-sm">{order.user.email}</p>
            <p className="text-sm">{order.user.country}</p>
          </div>
          <div>
            {order.orderItems.map((item) => (
              <>
                <div>Name: {item.book.title}</div>
                <div>Price:₹{(item.book.price / 100).toFixed(2)}</div>
              </>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;

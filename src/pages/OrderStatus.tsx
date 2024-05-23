import { useFetchAllOrders } from "@/api/OrderAPI";
import OrderCard from "@/components/OrderCard";

const OrderStatus = () => {
  const { orders } = useFetchAllOrders();

  if (orders?.length === 0) {
    return (
      <div className="flex justify-center items-center">No Order Found</div>
    );
  }

  return (
    <div className="flex flex-col gap-4  px-5 py-2">
      <h1 className="font-bold text-md">Your All Orders</h1>
      {orders?.map((order) => (
        <OrderCard order={order} />
      ))}
    </div>
  );
};

export default OrderStatus;

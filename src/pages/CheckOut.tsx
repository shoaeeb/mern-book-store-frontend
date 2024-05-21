import { useAppContext } from "@/Context/AppContextProvider";

const CheckOut = () => {
  const { cartItems } = useAppContext();
  console.log(cartItems);
  return <></>;
};

export default CheckOut;

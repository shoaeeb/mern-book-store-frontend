import { useAppContext } from "@/Context/AppContextProvider";
import { useMyProfile } from "@/api/MyUserApi";
import { useCreateStripeSession } from "@/api/OrderAPI";
import UserProfileForm, { UserFormType } from "@/components/UserProfileForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CheckOut = () => {
  const { cartItems } = useAppContext();
  const { CurrentUser, isLoading } = useMyProfile();
  const { createSession } = useCreateStripeSession();
  console.log(cartItems);
  const DELIVERY_PRICE = 50 * 100;
  const total =
    cartItems.reduce((acc, item) => acc + item.book.price * item.quantity, 0) +
    DELIVERY_PRICE;

  const onCheckOut = async (userFormData: UserFormType) => {
    const checkOutCartItems = cartItems.map((item) => {
      return {
        title: item.book.title,
        quantity: item.quantity,
        book: item.book._id,
      };
    });
    const data = await createSession({
      cartItems: checkOutCartItems,
      deliveryDetails: {
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        name: userFormData.name,
        email: userFormData.email as string,
        country: userFormData.country,
      },
    });
    window.location.href = data.url;
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center">No Items in Cart</div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-2 px-5 py-1">
      <div className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <>
            <div
              key={item.book._id}
              className="h-[150px] w-[300px] md:h-[300px] md:w-[500px]"
            >
              <img
                src={item.book.coverImage}
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{item.book.title}</h1>
              <p className="text-gray-500">{item.book.description}</p>
              <p className="text-gray-500">
                Price: ₹{(item.book.price / 100).toFixed(2)}
              </p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
              <p className="text-gray-500">
                Total:₹{((item.book.price * item.quantity) / 100).toFixed(2)}
              </p>
            </div>
          </>
        ))}
      </div>

      <div>
        <Card className="px-5 py-2">
          <CardHeader>
            <CardTitle>Check Out</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Delivery Price: ₹50 </p>
            <p>Total : ₹{(total / 100).toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={cartItems.length === 0}
                  className="bg-blue-400 hover:bg-blue-30"
                >
                  CheckOut
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
                {CurrentUser && (
                  <UserProfileForm
                    currentUser={CurrentUser}
                    buttonText="Checkout"
                    title="Enter your details to checkout"
                    isLoading={isLoading}
                    onSave={onCheckOut}
                  />
                )}
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CheckOut;

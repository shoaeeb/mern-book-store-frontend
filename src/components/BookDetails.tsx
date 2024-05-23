import { BookType } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "@/Context/AppContextProvider";

type Props = {
  book: BookType;
};

const BookDetails = ({ book }: Props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [quantity, setQuantity] = useState<number>(1);
  const { pathname } = useLocation();
  const { addToCart } = useAppContext();
  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Name:</CardTitle>
        </CardHeader>
        <CardContent>{book.title}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Author:</CardTitle>
        </CardHeader>
        <CardContent>{book.author} </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Description:</CardTitle>
        </CardHeader>
        <CardContent> {book.description}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Price:</CardTitle>
        </CardHeader>
        <CardContent> ₹{(book.price / 100).toFixed(2)}</CardContent>
      </Card>
      <div className="flex self-center">
        <Button
          onClick={() => {
            if (quantity == 1) return;
            setQuantity((prev) => prev - 1);
          }}
          className="bg-blue-500 hover:bg-blue-400 w-fit"
        >
          {" "}
          -
        </Button>
        <span className="px-2 py-1">{quantity}</span>
        <Button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="bg-blue-500 hover:bg-blue-400 w-fit"
        >
          +
        </Button>
      </div>
      {isAuthenticated ? (
        <Button
          onClick={() => addToCart({ book, quantity })}
          className="bg-blue-400 w-fit self-center "
        >
          Add to Cart
        </Button>
      ) : (
        <Button onClick={onLogin} className="bg-blue-400 w-fit self-center ">
          Login to Add to Cart
        </Button>
      )}
    </div>
  );
};

export default BookDetails;

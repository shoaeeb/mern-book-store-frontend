import { BookType } from "@/types/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

type Props = {
  book: BookType;
};

const SearchedItem = ({ book }: Props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Link
      to={`/detail/${book._id}`}
      className="grid lg:grid-cols-[2fr_3fr]  group"
    >
      <AspectRatio ratio={16 / 9} className=" max-w-md mx-auto ">
        <img
          src={book.coverImage}
          className="rounded-md h-full object-contain w-full"
        />
      </AspectRatio>
      <div className="flex flex-col gap-2 justify-center max-md:items-center  ">
        <p className="group-hover:underline">Name - {book.title}</p>
        <p>Written by - {book.author}</p>
        <p>Price - ₹ {(book.price / 100).toFixed(2)}</p>
        {isAuthenticated ? (
          <Button className="w-fit bg-blue-400 hover:bg-blue-300">
            Add to Cart
          </Button>
        ) : (
          <Button className="w-fit bg-blue-400 hover:bg-blue-300">
            Login To Add to Cart
          </Button>
        )}
      </div>
    </Link>
  );
};

export default SearchedItem;

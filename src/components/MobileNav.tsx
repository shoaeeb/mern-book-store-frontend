import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingButton from "./LoadingButton";

const MobileNav = () => {
  const { loginWithRedirect, user, logout, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-sm  text-center font-bold tracking-tight">
        {isAuthenticated && user?.email}
      </h1>
      <Link to="/" className="hover:bg-blue-400  px-3 py-2 rounded-md">
        Home
      </Link>
      <Link to="/" className="hover:bg-blue-400 px-3 py-2 rounded-md">
        About
      </Link>
      {isAuthenticated && (
        <Link
          to="/sell-book"
          className="hover:bg-blue-400 px-3 py-2 rounded-md"
        >
          Sell Your Book
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/my-books" className="hover:bg-blue-400 px-3 py-2 rounded-md">
          My Books
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/checkout" className="hover:bg-blue-400 px-3 py-2 rounded-md">
          Checkout
        </Link>
      )}
      {isAuthenticated && (
        <Button
          onClick={async () => logout()}
          disabled={isLoading}
          className="text-lg font-normal bg-blue-500 text-black hover:bg-blue-400"
        >
          Logout
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <Button
          onClick={async () => loginWithRedirect()}
          className="text-lg font-normal bg-blue-500 text-black hover:bg-blue-400"
        >
          Login
        </Button>
      )}
      {!isAuthenticated && isLoading && <LoadingButton />}
    </div>
  );
};

export default MobileNav;

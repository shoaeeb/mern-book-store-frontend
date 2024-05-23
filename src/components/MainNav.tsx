import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingButton from "./LoadingButton";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const { loginWithRedirect, user, logout, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div className=" flex items-center justify-end  w-full ">
      <Link to="/" className="hover:underline   px-3">
        Home
      </Link>
      <Link to="/" className="hover:underline px-3">
        About
      </Link>
      {isAuthenticated && (
        <Link to="/sell-book" className="hover:underline  px-3">
          Sell Your Book
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/checkout" className="hover:underline  px-3">
          Checkout
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/order-status" className="hover:underline  px-3">
          Order Status
        </Link>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{isAuthenticated ? user?.email : "Menu"}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] fixed inset-y-0 right-6 top-16">
          <div className="flex flex-col items-center">
            {isAuthenticated && (
              <Button
                onClick={async () => await logout()}
                disabled={isLoading}
                className="text-lg font-normal bg-transparent text-black hover:bg-blue-400"
              >
                Logout
              </Button>
            )}
            {!isAuthenticated && !isLoading && (
              <Button
                onClick={async () => loginWithRedirect()}
                disabled={isLoading}
                className="text-lg font-normal bg-transparent text-black hover:bg-blue-400"
              >
                Login
              </Button>
            )}
            {!isAuthenticated && isLoading && <LoadingButton />}
            <Link to="/profile" className="hover:bg-blue-500  px-3">
              Profile
            </Link>
            {isAuthenticated && (
              <Link to="/my-books" className="hover:bg-blue-500">
                My Books
              </Link>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainNav;

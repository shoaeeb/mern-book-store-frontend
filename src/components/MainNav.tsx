import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { useState } from "react";

const MainNav = () => {
  const isLoggedIn = true;
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex items-center justify-end  w-full ">
      <Link to="/" className="hover:bg-blue-500  px-3">
        Home
      </Link>
      <Link to="/" className="hover:bg-blue-500  px-3">
        About
      </Link>
      <Link to="/" className="hover:bg-blue-500  px-3">
        Sell Your Book
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>osman.shoaeeb@gmail.com</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] fixed inset-y-0 right-6 top-16">
          <div className="flex flex-col items-center">
            {isLoggedIn && (
              <Button className="text-lg font-normal bg-transparent text-black hover:bg-blue-400">
                Logout
              </Button>
            )}
            <Link to="/profile" className="hover:bg-blue-500  px-3">
              Profile
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainNav;

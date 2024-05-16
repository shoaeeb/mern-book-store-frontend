import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNav = () => {
  const isLoggedIn = true;

  return (
    <div className="flex flex-col gap-5">
      <Link to="/" className="hover:bg-blue-400  px-3 py-2 rounded-md">
        Home
      </Link>
      <Link to="/" className="hover:bg-blue-400 px-3 py-2 rounded-md">
        About
      </Link>
      <Link to="/" className="hover:bg-blue-400 px-3 py-2 rounded-md">
        Sell Your Book
      </Link>
      {isLoggedIn && (
        <Button className="text-lg font-normal bg-blue-500 text-black hover:bg-blue-400">
          Logout
        </Button>
      )}
    </div>
  );
};

export default MobileNav;

import { BookMarked, Menu } from "lucide-react";
import MainNav from "./MainNav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" text-lg px-6 w-full flex justify-between bg-blue-400  py-6">
      <div className=" flex flex-row items-center w-full">
        <BookMarked className="text-blue-800" size={20} />
        <Link to="/">Bookly</Link>
      </div>
      {/* Main Nav */}
      <div className="w-full border hidden md:block">
        <MainNav />
      </div>
      {/* Mobile Nav */}
      <div className="w-full flex flex-row md:hidden  justify-end">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-blue-800" size={20} />
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;

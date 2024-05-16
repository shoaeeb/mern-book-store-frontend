import { BookMarked } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-5 w-full  py-6 bg-blue-400 ">
      <div className="px-6 mx-auto flex flex-col gap-4 md:justify-between md:flex-row">
        <div className="flex flex-row items-center  w-full">
          <BookMarked className="text-blue-800" size={20} />
          <h3>Bookly</h3>
        </div>
        <div className="flex flex-col gap-6   md:flex-row justify-end items-center w-full">
          <h3>© {new Date().getFullYear()} </h3>
          <span className="text-sm">Terms and conditions</span>
          <span className="text-sm">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

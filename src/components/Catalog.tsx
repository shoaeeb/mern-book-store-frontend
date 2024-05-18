import { AspectRatio } from "./ui/aspect-ratio";
import favouriteBooks from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div className="px-6 mt-5 mx-auto w-full flex flex-col md:flex-row gap-6 ">
      <AspectRatio ratio={16 / 9}>
        <img
          src={favouriteBooks}
          alt="favourite Book"
          className="w-full h-full object-cover object-center"
        />
      </AspectRatio>
      <div className="flex flex-col gap-6 w-2/3 h-full self-center">
        <h1 className="text-2xl font-bold tracking-tight flex flex-col">
          Find your favourite{" "}
          <span className="text-blue-600 font-bold tracking-tight ">
            Book Here!
          </span>
        </h1>
        <span className="text-gray-600 text-sm font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quibusdam fugit velit adipisci accusamus omnis ratione modi sit
          molestias dolorem.
        </span>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
          <h1 className="flex flex-col font-bold">
            800 +<span className=" font-normal text-sm">Book Listing</span>
          </h1>
          <h1 className="flex flex-col font-bold">
            550 +<span className=" font-normal text-sm">Register user</span>
          </h1>
          <h1 className="flex flex-col font-bold">
            1200 +<span className=" font-normal text-sm">PDF download</span>
          </h1>
        </div>
        <Link
          className="bg-blue-600 font-bold w-fit text-white px-2 py-1"
          to="/search"
        >
          Explore now
        </Link>
      </div>
    </div>
  );
};

export default Catalog;

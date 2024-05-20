import { useNavigate } from "react-router-dom";
import SearchBar, { SearchFormType } from "./SearchBar";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const navigate = useNavigate();
  const onSubmit = (searchFormData:SearchFormType) => {
    navigate(`/search/${searchFormData.query}`);
  };
  return (
    <div className="mx-auto px-6 py-10 flex bg-blue-400 h-[600px] items-center w-full">
      <div className="flex flex-2 flex-col gap-5  px-6 py-2 w-full md:w-2/3 ">
        <h1 className="text-2xl font-bold tracking-tight">
          Buy and Sell Your Books
        </h1>
        <h1 className="text-blue-600 text-xl font-bold tracking-tight">
          for the best prices
        </h1>
        <p className="text-wrap text-lg">
          Find and read more books you&apos;ll love, and keep track of the books
          you want to read. Be part of the world&apos; largest community of book
          lovers on Good Reads
        </p>
        <SearchBar onSubmit={onSubmit} placeholder="Search a book here" />
      </div>
      <div className="flex-1   md:flex overflow-x-hidden hidden justify-center w-1/3">
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Hero;

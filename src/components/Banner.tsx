import { Button } from "./ui/button";
import awardBook from "../assets/awardbooks.png";

const Banner = () => {
  return (
    <div className="px-6 mx-auto mt-5  bg-green-400 flex flex-col md:flex-row ">
      <div className="w-full flex  flex-col self-center  gap-4">
        <h1 className="text-3xl font-bold ">
          2023 National Book Awards for Fiction Shortlist
        </h1>
        <Button className=" w-fit font-bold bg-blue-500 text-white hover:bg-blue-400">
          Explore
        </Button>
      </div>
      <img
        src={awardBook}
        alt="award book"
        className="flex md:self-center w-[30%] h-[30%] object-cover object-center"
      />
    </div>
  );
};

export default Banner;

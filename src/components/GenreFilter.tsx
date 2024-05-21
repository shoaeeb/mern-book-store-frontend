import { genre } from "@/config/Genre-config";
import React from "react";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  isExpanded: boolean;
  setExpanded: () => void;
  onChange: (genre: string[]) => void;
  selectedGenre: string[];
};

const GenreFilter = ({
  isExpanded,
  setExpanded,
  onChange,
  selectedGenre,
}: Props) => {
  const handleResetGenre = () => {
    onChange([]);
  };
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //checked

    if (e.target.checked) {
      onChange([...selectedGenre, e.target.value]);
    } else {
      const filteredGenre = selectedGenre.filter(
        (g: string) => g !== e.target.value
      );
      onChange(filteredGenre);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter by genre</div>
        <div
          onClick={() => handleResetGenre()}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {genre.slice(0, isExpanded ? genre.length : 7).map((g, index) => {
          const isSelected = selectedGenre.includes(g);
          return (
            <div key={index} className="flex">
              <input
                id={`genre_${g}`}
                type="checkbox"
                className="hidden"
                value={g}
                checked={isSelected}
                onChange={handleGenreChange}
              />
              <Label
                htmlFor={`genre_${g}`}
                className={`flex flex-1 items-center cursor-pointer text-sm rounded-full font-semibold px-4 py-2
              ${
                isSelected
                  ? "border border-blue-600 text-green-600"
                  : "border border-slate-300"
              }
             
             `}
              >
                {isSelected && <Check size={20} strokeWidth={3} />}
                {g}
              </Label>
            </div>
          );
        })}
        <Button onClick={setExpanded} variant={"link"} className="mt-4 flex-1">
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default GenreFilter;

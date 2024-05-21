import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SORT_OPTIONS = [
  { label: "BEST MATCH", value: "bestMatch" },
  { label: "LOW TO HIGH", value: "asc" },
  { label: "HIGH TO LOW", value: "desc" },
];
type Props = {
  sortOption: string;
  setSortOptions: (value: string) => void;
};

const SortOptionDropDown = ({ sortOption, setSortOptions }: Props) => {
  const sortOptionLabel = SORT_OPTIONS.find(
    (item) => item.value === sortOption
  )?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-full" variant="outline">
          Sort -{sortOptionLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            onClick={() => setSortOptions(option.value)}
            className="cursor-pointer"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropDown;

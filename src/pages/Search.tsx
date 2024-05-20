import { useSearchBook } from "@/api/BookApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchedItem from "@/components/SearchedItem";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const [page, setPage] = useState<number>(1);
  const { searchedBooks } = useSearchBook({ query: query || "", page });

  const setActivePage = (page: number) => {
    setPage(page);
  };
  const hasPrev =
    (searchedBooks && searchedBooks?.pagination?.page > 1) || false;

  let paginationButtons = [];
  let count = 0;
  if (searchedBooks) {
    for (let i = page; i <= searchedBooks?.pagination.pages; i++) {
      if (count == 3) break;
      paginationButtons.push(i);
      count++;
    }
  }

  const hasNext =
    searchedBooks?.pagination.page !== searchedBooks?.pagination.pages;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr]">
      {/* Filters */}
      <div></div>
      <div className="flex flex-col gap-1">
        {/* header */}
        <div className="flex justify-between">
          <h1 className="font-bold">
            {searchedBooks?.pagination.total}-Books Found for {query}
          </h1>
        </div>
        {searchedBooks?.data.map((book) => (
          <SearchedItem book={book} key={book._id} />
        ))}
        <PaginationSelector
          setPage={setActivePage}
          currentPage={page}
          hasNext={hasNext}
          hasPrevious={hasPrev}
          paginationButtons={paginationButtons}
        />
      </div>
    </div>
  );
};

export default Search;

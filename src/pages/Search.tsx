import { useSearchBook } from "@/api/BookApi";
import GenreFilter from "@/components/GenreFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchFormType } from "@/components/SearchBar";
import SearchedItem from "@/components/SearchedItem";
import SortOptionDropDown from "@/components/SortOptionDropDown";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type SearchQuery = {
  query: string;
  page: number;
  selectedGenre: string[];
  sort: string;
};

const Search = () => {
  const navigate = useNavigate();
  const { query } = useParams();

  const onSubmit = (searchForm: SearchFormType) => {
    navigate(`/search/${searchForm.query}`);
  };
  // const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    query: query || "",
    page: 1,
    selectedGenre: [],
    sort: "bestMatch",
  });
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const { searchedBooks } = useSearchBook({
    query: query || "",
    page: searchQuery.page,
    selectedGenre: searchQuery.selectedGenre,
    sort: searchQuery.sort,
  });

  const setActivePage = (page: number) => {
    setSearchQuery({
      ...searchQuery,
      page: page,
    });
  };

  const setSelectedGenre = (genre: string[]) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      page: 1,
      selectedGenre: genre,
    }));
  };
  const setSearchSortOptions = (value: string) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      page: 1,
      sort: value,
    }));
  };

  const hasPrev =
    (searchedBooks && searchedBooks?.pagination?.page > 1) || false;

  let paginationButtons = [];
  let count = 0;
  if (searchedBooks) {
    for (let i = searchQuery.page; i <= searchedBooks?.pagination.pages; i++) {
      if (count == 3) break;
      paginationButtons.push(i);
      count++;
    }
  }

  const hasNext =
    searchedBooks?.pagination.page !== searchedBooks?.pagination.pages;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] mt-4">
      {/* Filters */}
      <GenreFilter
        isExpanded={isExpanded}
        setExpanded={() => setExpanded((prev) => !prev)}
        onChange={setSelectedGenre}
        selectedGenre={searchQuery.selectedGenre}
      />

      <div className="flex flex-col gap-3">
        {/* header */}
        <SearchBar placeholder="Search By Book Name" onSubmit={onSubmit} />
        <div className="flex px-5  items-center justify-between">
          {searchQuery.selectedGenre.length === 0 && (
            <h1 className="font-bold">
              {searchedBooks?.pagination.total}-Books Found for {query}
            </h1>
          )}
          {searchQuery.selectedGenre.length > 0 && (
            <h1 className="font-bold">
              {searchedBooks?.pagination.total}-Books Found
            </h1>
          )}
          <SortOptionDropDown
            sortOption={searchQuery.sort}
            setSortOptions={setSearchSortOptions}
          />
        </div>
        {searchedBooks && searchedBooks?.data?.length === 0 && (
          <h1 className="text-2xl font-bold">No Books Found</h1>
        )}
        {searchedBooks &&
          searchedBooks.data &&
          searchedBooks?.data?.map((book) => (
            <SearchedItem book={book} key={book._id} />
          ))}
        <PaginationSelector
          setPage={setActivePage}
          currentPage={searchQuery.page}
          hasNext={hasNext}
          hasPrevious={hasPrev}
          paginationButtons={paginationButtons}
        />
      </div>
    </div>
  );
};

export default Search;

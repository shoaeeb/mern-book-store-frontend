import { useMyAddedBook, useMyBookRequest } from "@/api/MyBookApi";
import MyAllBooks from "@/components/MyAllBooks";
import PreviewBook from "@/components/PreviewBook";
import { BookType } from "@/types/types";
import { useState } from "react";

const MyBooks = () => {
  const [page, setPage] = useState<number>(1);
  const { myAddedBooks, isLoading } = useMyAddedBook(page);
  const [selectedBook, setSelectedBook] = useState<BookType | undefined>(
    undefined
  );
  const { getSingleBook, isLoading: isGettingBook } = useMyBookRequest(
    selectedBook?._id
  );

  const hasPrev = (myAddedBooks && myAddedBooks?.pagination?.page > 1) || false;

  let paginationButtons = [];
  let count = 0;
  if (myAddedBooks) {
    for (let i = page; i <= myAddedBooks?.pagination.pages; i++) {
      if (count == 3) break;
      paginationButtons.push(i);
      count++;
    }
  }
  const hasNext =
    myAddedBooks?.pagination.page !== myAddedBooks?.pagination.pages;

  const setActivePage = (page: number) => {
    setPage(page);
  };

  const addBook = (book: BookType) => {
    if (selectedBook?._id === book._id) return setSelectedBook(undefined);
    setSelectedBook(book);
  };

  if (isLoading) {
    return <div className="w-full flex justify-center">Loading....</div>;
  }

  if (!myAddedBooks || myAddedBooks.data.length === 0) {
    return <div className="w-full flex justify-center">No Books To Show</div>;
  }

  return (
    <div className="w-full  mx-auto  bg-gray-200">
      {/* sample preview */}
      <div className="grid w-full md:grid-cols-2 ">
        {getSingleBook ? (
          <PreviewBook book={getSingleBook} isLoading={isGettingBook} />
        ) : (
          <div className=" w-full flex justify-center items-center">
            Select a book to show preview
          </div>
        )}
        {myAddedBooks.data && (
          <MyAllBooks
            currentPage={page}
            setPage={setActivePage}
            books={myAddedBooks.data}
            selectedBook={selectedBook}
            addBook={addBook}
            hasNext={hasNext}
            hasPrevious={hasPrev}
            paginationButtons={paginationButtons}
          />
        )}
      </div>
    </div>
  );
};

export default MyBooks;

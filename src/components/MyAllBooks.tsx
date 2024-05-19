import { BookType } from "@/types/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import PaginationSelector from "./PaginationSelector";

type Props = {
  books: BookType[];
  addBook: (book: BookType) => void;
  selectedBook: BookType | undefined;
  setPage: (page: number) => void;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  paginationButtons: number[];
};

const MyAllBooks = ({
  books,
  addBook,
  selectedBook,
  setPage,
  currentPage,
  hasNext,
  hasPrevious,
  paginationButtons,
}: Props) => {
  return (
    <div className=" w-full flex flex-col gap-3 ">
      <Table className=" w-full ">
        <TableCaption>A list of your added books</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Book Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Publication Year</TableHead>
            <TableHead>Description</TableHead>
            <TableHeader>Edit</TableHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book: BookType) => (
            <TableRow key={book._id}>
              <TableCell>
                <Checkbox
                  checked={selectedBook?._id === book._id}
                  onCheckedChange={() => {
                    addBook(book);
                  }}
                />
              </TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.publicationYear}</TableCell>
              <TableCell className=" text-wrap max-w-[50px]">
                {book.description.slice(0, 50)}...
              </TableCell>
              <TableCell>
                <Link className="cursor-pointer" to={`/edit-book/${book._id}`}>
                  <Edit size={20} className="text-blue-400" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationSelector
        currentPage={currentPage}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        paginationButtons={paginationButtons}
        setPage={setPage}
      />
    </div>
  );
};

export default MyAllBooks;

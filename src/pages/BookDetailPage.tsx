import { useSearchBookById } from "@/api/BookApi";
import BookDetails from "@/components/BookDetails";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const { book, isLoading } = useSearchBookById(bookId);
  if (isLoading) {
    return <div className="flex items-center justify-center">Loading....</div>;
  }
  return (
    <div className="flex flex-col md:flex-row w-full gap-5  px-2 py-1">
      <img
        className="h-[300px] w-[500px]"
        src={book?.coverImage}
        alt={book?.title}
      />
      {book && <BookDetails book={book} />}
    </div>
  );
};

export default BookDetailPage;

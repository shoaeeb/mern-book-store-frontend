import { useMyBookRequest, useUpdateMyBook } from "@/api/MyBookApi";
import SellBookForm from "@/components/sell-book-form/SellBookForm";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { bookId } = useParams();
  const { getSingleBook, isLoading } = useMyBookRequest(bookId);
  const { updateMyBook, isLoading: isUpdatingBook } = useUpdateMyBook();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <SellBookForm
      onSubmit={updateMyBook}
      book={getSingleBook}
      isLoading={isUpdatingBook}
    />
  );
};

export default EditBook;

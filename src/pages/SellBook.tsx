import { useMyAddBook } from "@/api/MyBookApi";
import SellBookForm from "@/components/sell-book-form/SellBookForm";

const SellBook = () => {
  const { addMyBook, isLoading } = useMyAddBook();

  return <SellBookForm onSubmit={addMyBook} isLoading={isLoading} />;
};

export default SellBook;

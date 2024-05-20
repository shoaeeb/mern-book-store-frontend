import { BookType } from "@/types/types";

type Props = {
  book: BookType;
  isLoading: boolean;
};

const PreviewBook = ({ book, isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading Image ...</div>;
  }
  return (
    <div className="w-full  flex justify-center ">
      <img
        height={"150px"}
        width={"300px"}
        src={book.coverImage}
        alt={book.title}
      />
    </div>
  );
};
export default PreviewBook;

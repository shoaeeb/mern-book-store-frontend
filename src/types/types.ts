export type BookType = {
  _id: string;
  user: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  genre: string[];
  publicationYear: string;
  price: number;
};

export type ResponseType = {
  data: BookType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

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

export type StatusType =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type OrderType = {
  user: {
    _id: string;
    name: string;
    city: string;
    email: string;
    country: string;
    addressLine1: string;
  };
  orderItems: [
    {
      book: BookType;
      title: string;
      quantity: number;
    }
  ];
  deliveryDetails: {
    email: string;
    city: string;
    addressLine: string;
    country: string;
  };
  total: Number;
  status: StatusType;
};

import { ResponseType } from "@/types/types";
import { useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type SearchQuery = {
  query: string;
  page: number;
  selectedGenre: string[];
  sort: string;
};

export const useSearchBook = (searchQuery: SearchQuery) => {
  const mySearchBookRequest = async (): Promise<ResponseType> => {
    const params = new URLSearchParams();
    params.set("query", searchQuery.query);
    params.set("page", searchQuery.page.toString());
    params.set("selectedGenre", searchQuery.selectedGenre.join(","));
    params.set("sort", searchQuery.sort);

    const response = await fetch(
      `${API_BASE_URL}/api/books/search?${params.toString()}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search books");
    }
    return response.json();
  };
  const {
    data: searchedBooks,
    isLoading,
    error,
  } = useQuery(["search", searchQuery], mySearchBookRequest);
  if (error) {
    toast.error("Failed to fetch Searched Books");
  }
  return {
    searchedBooks,
    isLoading,
  };
};

export const useSearchBookById = (id: string | undefined) => {
  const mySearchBookRequestById = async () => {
    const response = await fetch(`${API_BASE_URL}/api/books/book/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Books");
    }
    return response.json();
  };
  const {
    data: book,
    isLoading,
    error,
  } = useQuery("fetchSearchBookById", mySearchBookRequestById, {
    enabled: !!id,
  });
  if (error) {
    toast.error("failed to fetch book");
  }
  return { book, isLoading };
};

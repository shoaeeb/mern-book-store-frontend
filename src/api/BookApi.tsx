import { ResponseType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type SearchQuery = {
  query: string;
  page: number;
};

export const useSearchBook = (searchQuery: SearchQuery) => {
  const { getAccessTokenSilently } = useAuth0();
  const mySearchBookRequest = async (): Promise<ResponseType> => {
    const params = new URLSearchParams();
    params.set("query", searchQuery.query);
    params.set("page", searchQuery.page.toString());

    const token = await getAccessTokenSilently();
    const response = await fetch(
      `${API_BASE_URL}/api/books/search?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

import { BookType, ResponseType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useMyAddBook = () => {
  const { getAccessTokenSilently } = useAuth0();
  const addMyBookRequest = async (formData: FormData) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/books`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to add book");
    }
    return response.json();
  };

  const {
    mutateAsync: addMyBook,
    reset,
    isSuccess,
    isLoading,
    isError,
  } = useMutation(addMyBookRequest);

  if (isError) {
    toast.error("Failed to add Book");
    reset();
  }
  if (isSuccess) {
    toast.success("Added Book");
  }
  return {
    addMyBook,
    isLoading,
  };
};

export const useMyAddedBook = (page: number) => {
  const { getAccessTokenSilently } = useAuth0();
  const addedBookRequest = async (): Promise<ResponseType> => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/books?page=${page}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed To Fetch Books");
    }
    return response.json();
  };

  const {
    data: myAddedBooks,
    isLoading,
    isError,
  } = useQuery(["fetchMyAddedBooks", page], addedBookRequest);

  if (isError) {
    toast.error("Failed to fetch books");
  }

  return {
    myAddedBooks,
    isLoading,
  };
};

export const useMyBookRequest = (id: string | undefined) => {
  const { getAccessTokenSilently } = useAuth0();
  const getSingleBookRequest = async (): Promise<BookType | undefined> => {
    if (!id) return;

    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/books/single/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed To Fetch Books");
    }
    return response.json();
  };

  const {
    data: getSingleBook,
    isLoading,
    isError,
  } = useQuery(["fetchSingleBookById", id], getSingleBookRequest);

  if (isError) {
    toast.error("Failed to fetch books");
  }

  return {
    getSingleBook,
    isLoading,
  };
};

export const useUpdateMyBook = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyBookRequest = async (formData: FormData) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(
      `${API_BASE_URL}/api/books/${formData.get("id")}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add book");
    }
    return response.json();
  };

  const {
    mutateAsync: updateMyBook,
    reset,
    isSuccess,
    isLoading,
    isError,
  } = useMutation(updateMyBookRequest);

  if (isError) {
    toast.error("Failed to Update Book");
    reset();
  }
  if (isSuccess) {
    toast.success("Updated Book");
  }
  return {
    updateMyBook,
    isLoading,
  };
};

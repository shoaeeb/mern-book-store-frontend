import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
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

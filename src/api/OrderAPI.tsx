import { OrderType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CheckoutSessionRequest = {
  cartItems: {
    book: string;
    title: string;
    quantity: number;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
};

export const useCreateStripeSession = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createSessionRequest = async (
    checkOutSessionRequest: CheckoutSessionRequest
  ) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(
      `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkOutSessionRequest),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create session");
    }
    return response.json();
  };

  const {
    mutateAsync: createSession,
    reset,
    isLoading,
    error,
  } = useMutation(createSessionRequest);
  if (error) {
    toast.error("Failed to create Stripe Session");
    reset();
  }
  return {
    createSession,
    isLoading,
  };
};

export const useFetchAllOrders = () => {
  const { getAccessTokenSilently } = useAuth0();
  const fetchAllOrders = async (): Promise<OrderType[]> => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Orders");
    }
    return response.json();
  };
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery("fetchAllOrderByUser", fetchAllOrders);

  if (error) {
    toast.error("Failed to fetch your Orders");
  }
  return {
    orders,
    isLoading,
  };
};

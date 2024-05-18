import { UserFormType } from "@/components/UserProfileForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export type UserType = {
  auth0Id: string;
  email: string;
  city?: string;
  country?: string;
  addressLine1?: string;
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createUserRequest = async (userFormData: UserType) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userFormData),
    });
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    return response.json();
  };

  const { mutateAsync: createUser, isError } = useMutation(createUserRequest);
  if (isError) {
    console.log("Something went wrong");
  }
  return {
    createUser,
  };
};

export const useMyProfile = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyProfile = async (): Promise<UserType> => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch User");
    }
    return response.json();
  };

  const {
    data: CurrentUser,
    error,
    isLoading,
  } = useQuery("getMyProfile", getMyProfile);
  if (error) {
    console.log("failed to fetch User");
  }
  return {
    CurrentUser,
    isLoading,
  };
};

export const useUpdateMyProfile = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyProfile = async (formData: UserFormType) => {
    const token = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/user/update`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
  };

  const {
    mutateAsync: updateUser,
    reset,
    isSuccess,
    isLoading,
    error,
  } = useMutation(updateMyProfile);
  if (error) {
    toast.error("Failed to update user");
    reset(); //reset the errors
  }
  if (isSuccess) {
    toast.success("User Updated Successfully");
  }
  return {
    updateUser,
    isLoading,
  };
};

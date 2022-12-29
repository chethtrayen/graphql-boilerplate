import { useState, useEffect } from "react";
import { useLoader } from "../../../hooks";

interface IUser {
  id: number;
}

const getUserDetailRequest = async (userId: number): Promise<IUser> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId });
    }, 1000);
  });
};

export const useUserDetails = (userId: number) => {
  const [userDetails, setUserDetails] = useState<IUser>();
  const { loading, setLoading } = useLoader<IUser | undefined>(userDetails);

  useEffect(() => {
    const getDetails = async (): Promise<void> => {
      setLoading(true);
      const details = await getUserDetailRequest(userId);
      setUserDetails(details);
    };

    getDetails();
  }, [setLoading, userId]);

  return { userDetails, loading };
};

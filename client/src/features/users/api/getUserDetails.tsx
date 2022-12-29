import { useState, useEffect } from "react";
import { useLoader } from "../../../hooks/loader";
import { User } from "@type";

const getUserDetailRequest = async (userId: number): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId });
    }, 1000);
  });
};

export const useUserDetails = (userId: number) => {
  const [userDetails, setUserDetails] = useState<User>();
  const { loading, setLoading } = useLoader<User | undefined>(userDetails);

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

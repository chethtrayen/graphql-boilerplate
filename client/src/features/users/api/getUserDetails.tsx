import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useLoader } from "../../../hooks/loader";
import { User } from "@type";

// gql-user
const GET_USER = gql`
  query user($id: Int) {
    user(id: $id) {
      id
    }
  }
`;

export const useUserDetails = (userId: number) => {
  const { data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  const [userDetails, setUserDetails] = useState<User>();
  const { Loader, loading, setLoading } = useLoader<User | undefined>(userDetails);

  useEffect(() => {
    if (data) {
      setUserDetails(data.user);
    } else {
      setLoading(true);
    }
  }, [data, setLoading]);

  return { userDetails, Loader, loading };
};

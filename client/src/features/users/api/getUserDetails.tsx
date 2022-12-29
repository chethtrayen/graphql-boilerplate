import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useLoader } from "../../../hooks/loader";
import { User } from "@type";

// gql-user
const GET_USER = gql`
  query user($id: int) {
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
  const { loading, setLoading } = useLoader<User | undefined>(userDetails);

  useEffect(() => {
    if (data) {
      setUserDetails(data);
    } else {
      setLoading(true);
    }
  }, [data, setLoading]);

  return { userDetails, loading };
};

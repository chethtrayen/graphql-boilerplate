import { useUserDetails } from "../api/getUserDetails";
import { Header } from "../../../components";

export const UserDetails = () => {
  const { userDetails, loading } = useUserDetails(10);
  if (loading || !userDetails) return null;

  return <Header>{userDetails.id}</Header>;
};

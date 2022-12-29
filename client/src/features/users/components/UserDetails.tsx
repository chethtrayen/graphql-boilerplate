import { useUserDetails } from "../api/getUserDetails";
import { Header } from "../../../components";

export const UserDetails = () => {
  const { userDetails, loading } = useUserDetails(10);
  if (loading) return null;

  return <Header>{userDetails?.id}</Header>;
};

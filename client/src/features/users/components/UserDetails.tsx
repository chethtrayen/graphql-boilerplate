import { useUserDetails } from "../api/getUserDetails";
import { Header } from "../../../components";

export const UserDetails = () => {
  const { userDetails, Loader, loading } = useUserDetails(10);
  if (loading || !userDetails) return <Loader />;

  return <Header>{userDetails.id}</Header>;
};

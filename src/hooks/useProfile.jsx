import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProfile = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: profile = {}, refetch } = useQuery({
    queryKey: ["profile"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/profile/${user?.email}`);
      return res.data;
    },
  });
  return [profile, refetch];
};

export default useProfile;

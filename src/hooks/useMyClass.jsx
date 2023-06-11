import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes/myClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [myClass, refetch];
};

export default useMyClass;

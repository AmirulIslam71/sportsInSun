import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelect = () => {
  const { user, loading } = useAuth();

  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user.email}`
      );
      return res.json();
    },
  });
  return [selectedClass, refetch];
};

export default useSelect;

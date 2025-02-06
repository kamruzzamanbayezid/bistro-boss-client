import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const { user } = UseAuth();
  const apiHandler = UseAxiosSecure();

  const { data } = useQuery({
    queryKey: [user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await apiHandler.get(`/users/admin/${user?.email}`);
      return res?.data?.admin;
    },
  });
  return { data };
};

export default UseAdmin;

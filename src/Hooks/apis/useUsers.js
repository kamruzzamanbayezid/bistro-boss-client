import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure";

const useUsers = () => {

      const apiHandler = UseAxiosSecure();

      const { data: users = [], isError, error, isLoading, refetch } = useQuery({
            queryKey: ['user'],
            queryFn: async () => {
                  const response = await apiHandler.get('/users', { withCredentials: true });
                  return response?.data;
            }
      })

      return { users, isError, error, isLoading, refetch };
};

export default useUsers;



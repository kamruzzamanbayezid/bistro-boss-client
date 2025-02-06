import UseAuth from "../UseAuth";
import UseAxiosSecure from "../UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyCartsData = () => {

      const apiHandler = UseAxiosSecure();
      const { user } = UseAuth();

      const { data: carts = [], isError, error, isLoading, refetch } = useQuery({
            queryKey: ['cart', user?.email],
            queryFn: async () => {
                  const response = await apiHandler.get(`/carts/by-email/${user?.email}`);
                  return response?.data;
            }
      })

      return { carts, isError, error, isLoading, refetch };
};

export default useMyCartsData;




import UseAxiosSecure from "../UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = (category) => {

      const apiHandler = UseAxiosSecure();

      const { data: menus = [], isError, error, isLoading, refetch } = useQuery({
            queryKey: ['menu'],
            queryFn: async () => {
                  const response = await apiHandler.get('/all-menu', { withCredentials: true });
                  if (category) {
                        const filteredMenuByCategory = response?.data?.filter(menu => menu?.category === category);
                        return filteredMenuByCategory;
                  } else {
                        return response?.data;
                  }
            }
      })

      return { menus, error, isLoading, isError, refetch };
};

export default useMenu;

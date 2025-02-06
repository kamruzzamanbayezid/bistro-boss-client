import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxiosSecure";

const useMenu = (category) => {
      const [menus, setMenus] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const apiHandler = UseAxiosSecure();

      const fetchMenu = async () => {
            try {
                  setLoading(true);
                  const response = await apiHandler.get('/all-menu');
                  const allMenu = response?.data;
                  if (category) {
                        const filteredMenuByCategory = allMenu?.filter(menu => menu?.category === category);
                        setMenus(filteredMenuByCategory);
                  } else {
                        setMenus(allMenu);
                  }
            } catch (err) {
                  setError(err?.message || "Something went wrong!");
            } finally {
                  setLoading(false);
            }
      };

      useEffect(() => {
            fetchMenu()
      }, []);

      return { menus, loading, error, fetchMenu };
};

export default useMenu;

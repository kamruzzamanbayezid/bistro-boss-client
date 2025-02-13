import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logOut } = UseAuth();
  const navigate = useNavigate();

  instance.interceptors.response.use(
    (res) => {
      // console.log("I am from interceptors:", res);
      return res;
    },
    async (error) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default UseAxiosSecure;

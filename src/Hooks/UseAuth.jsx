import { useContext } from "react";
import { AuthContent } from "../Provider/AuthProvider";

const UseAuth = () => {
      
      const auth = useContext(AuthContent);
      return auth;
};

export default UseAuth;
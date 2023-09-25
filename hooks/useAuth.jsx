import axios from "axios";
import { useContext } from "react";
import { AuthantcationContaxt } from "../app/context/AuthContext";
import { removeCookies } from "cookies-next";
//http://localhost:3000
const URL = "/api/auth/";

const useAuth = () => {
  const { loading, data, error, setAuth } = useContext(AuthantcationContaxt);

  const signin = async ({ email, password }, handleClose) => {
    setAuth({
      loading: true,
      error: null,
      data: null,
    });
    try {
      const respond = await axios.post(URL + "/signin", {
        email,
        password,
      });
      setAuth({
        loading: false,
        error: null,
        data: respond.data,
      });

      handleClose();
    } catch (error) {
      setAuth({
        loading: false,
        error: error.response.data.errorMessage,
        data: null,
      });
    }
  };
  const signup = async (
    { firstName, lastName, email, phone, city, password },
    handleClose
  ) => {
    setAuth({
      loading: true,
      error: null,
      data: null,
    });
    try {
      const respond = await axios.post(URL + "/signup", {
        firstName,
        lastName,
        email,
        phone,
        city,
        password,
      });
      setAuth({
        loading: false,
        error: null,
        data: respond.data,
      });
      handleClose();
    } catch (error) {
      setAuth({
        loading: false,
        error: error.response.data.errorMessage,
        data: null,
      });
    }
  };

  const signout = () => {
    removeCookies("jwt");
    setAuth({
      loading: false,
      error: false,
      data: null,
    });
  };

  return {
    signin,
    signup,
    signout,
  };
};

export default useAuth;

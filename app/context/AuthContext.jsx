"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useState, createContext, useEffect } from "react";
//http://localhost:3000
const URL = "/api/auth/";

export const AuthantcationContaxt = createContext({
  loading: false,
  data: null,
  error: null,
  setAuth: () => {},
});

export default function AuthContext({ children }) {
  const [auth, setAuth] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const getUser = async (req, res) => {
    setAuth({
      loading: true,
      error: null,
      data: null,
    });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuth({
          loading: false,
          error: null,
          data: null,
        });
      }

      const response = await axios.get(URL + "/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      setAuth({
        loading: false,
        error: null,
        data: response.data,
      });
    } catch (error) {
      setAuth({
        loading: false,
        error: error,
        data: null,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthantcationContaxt.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthantcationContaxt.Provider>
  );
}

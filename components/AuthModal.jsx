"use client";

import { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInput from "./AuthInput";
import useAuth from "../hooks/useAuth";
import { AuthantcationContaxt } from "../app/context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }) {
  const { loading, data, error } = useContext(AuthantcationContaxt);

  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { signin, signup } = useAuth();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handileChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (isSignin) {
      if (input.email && input.password) {
        return setIsDisabled(false);
      }
    } else {
      if (
        input.email &&
        input.password &&
        input.city &&
        input.phone &&
        input.lastName &&
        input.firstName
      ) {
        return setIsDisabled(false);
      }
    }
    setIsDisabled(true);
  }, [input]);

  const clickHandeler = () => {
    if (isSignin) {
      signin({ email: input.email, password: input.password }, handleClose);
      setInput({ email: "", password: "" });
    } else {
      signup(
        {
          email: input.email,
          password: input.password,
          city: input.city,
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
        },
        handleClose
      );
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <button
        className={
          isSignin
            ? "bg-blue-400   text-white border p-1 px-4 rounded mr-3 dark:bg-dark-bg"
            : "border p-1 px-4 rounded dark:text-white "
        }
        onClick={handleOpen}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" dark:bg-slate-900">
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="p-2">
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {isSignin ? "Sign in" : "create account"}
                </p>
                {error && <Alert severity="error">{error}</Alert>}
              </div>

              <div className="m-auto pb-3">
                <AuthInput
                  input={input}
                  handileChange={handileChange}
                  isSignin={isSignin}
                />
                <button
                  className="uppercase bg-red-600 w-full text-center text-white p-3 rounded mt-3 block text-sm mb-4 disabled:bg-gray-400 dark:bg-red-900 dark:disabled:bg-zinc-800"
                  disabled={isDisabled}
                  onClick={clickHandeler}
                >
                  {isSignin ? "Sign in" : "create account"}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

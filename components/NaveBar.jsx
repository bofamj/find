"use client";
import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthantcationContaxt } from "../app/context/AuthContext";
import useAuth from "../hooks/useAuth";
import DarckModeButton from "./DarckModeButton";

const NaveBar = () => {
  const { data, loading } = useContext(AuthantcationContaxt);
  const { signout } = useAuth();

  return (
    <nav className="bg-gray-100 dark:bg-zinc-900 p-2  flex justify-between">
      <Link
        href="/"
        className="font-bold text-gray-700 dark:text-white text-2xl"
      >
        Find
      </Link>

      <div>
        {loading ? (
          ""
        ) : (
          <div className="flex mr-4 items-center justify-between">
            <DarckModeButton />
            {data ? (
              <button
                className="bg-blue-400  text-white border p-1 px-4 rounded mr-3  dark:bg-dark-bg "
                onClick={signout}
              >
                Logout
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NaveBar;

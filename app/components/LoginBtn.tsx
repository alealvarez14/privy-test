"use client";

import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

const LoginBtn = () => {
  const { login, logout, authenticated, ready } = usePrivy();

  const handleButtonClick = async () => {
    login();
  };

  useEffect(() => {
    if (authenticated && ready) {
      console.log("User logged in!")
    }
  }, [authenticated, ready]);

  return (
    <div>
      {!authenticated && ready && (
        <button
          onClick={handleButtonClick}
        >
          Log in with Phone
        </button>
      )}
      {authenticated && ready && (
        <button onClick={logout} >
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginBtn;

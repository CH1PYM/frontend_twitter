import { createContext, useContext, useState } from "react";
import React from "react";
import axios, { AxiosError } from "axios";
import {
  Error,
  SignInToken,
  AuthContextType,
  AuthProviderProps,
} from "../types/types";
import { useLocalStorage } from "../hooks/useLocaleStorage";

const AuthContext = createContext({} as AuthContextType);

export function useLoginContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState<string>("");
  const [errStatus, setErrStatus] = useState<string>("");
  const [token, setToken] = useLocalStorage<SignInToken | null>(
    "access-token",
    null
  );

  const logIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response));
      const accessToken: SignInToken = response.data.access_token;
      setToken(accessToken);
      setErrStatus("");
      setLoginStatus("You logged in");
    } catch (err) {
      const error = err as AxiosError<Error>;
      console.log(error);
      if (error.response?.status === 403) {
        setErrStatus("Incorrect credentials");
      } else if (error.response?.status === 400) {
        setErrStatus("Missing email or password");
        setLoginStatus("You signed in");
      } else {
        setErrStatus("Something went wrong");
        setLoginStatus("You signed in");
      }
    }
  };
  const signUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        JSON.stringify({ email, password, username }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response));
      const accessToken: SignInToken = response.data.access_token;
      setToken(accessToken);
      setErrStatus("");
      setLoginStatus("You signed in");
    } catch (err) {
      const error = err as AxiosError<Error>;
      console.log(error);
      if (error.response?.status === 403) {
        setErrStatus(
          "Incorrect credentials, your email or username is already used"
        );
        setLoginStatus("");
      } else {
        setErrStatus("Something went wrong");
        setLoginStatus("");
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        loginStatus,
        errStatus,
        logIn,
        signUp,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

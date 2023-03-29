import { ReactNode  } from "react";
  export interface Error {
    message: string[];
    statusCode: number;
  }
  export interface SignInToken {
    access_token: string;
  }


  export type AuthProviderProps = {
    children: ReactNode
  }
  export type AuthContextType = {
    username: string,
    setUsername:(email:string) => void,
    email: string,
    setEmail:(email:string) => void
    password: string,
    setPassword:(email:string) => void
    loginStatus:string,
    errStatus:string,
    logIn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    signUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    token:SignInToken | null | undefined
    
  }
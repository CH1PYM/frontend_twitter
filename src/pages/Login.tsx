import { Box, Container, TextField, Button, ButtonBase } from "@mui/material";

import React, { ChangeEventHandler, ChangeEvent } from "react";
import { LogInForm } from "../features/auth/component/SignInForm";

export const Login = () => {


  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        /* border: "black 4px solid",*/ width: "30%",
      }}
    >
      <LogInForm/>
    </Container>
  );
};

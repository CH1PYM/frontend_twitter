import React from "react";
import { Box, Container, TextField,Button } from "@mui/material";
import { SignUpForm } from "../features/auth/component/SignUpForm";

export const Signup = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,/* border: "black 4px solid",*/width: "30%",}}
    >
    <SignUpForm/>
    </Container>
  );
};
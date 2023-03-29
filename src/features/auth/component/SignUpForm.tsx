import { Box, TextField, Button } from "@mui/material";
import React  from "react";
import { useLoginContext } from "../context/authContext";

export const SignUpForm = () => {
        const {
          email,
          setEmail,
          setPassword,
          password,
          errStatus,
          loginStatus,
          logIn,
          setUsername,
          username,
          signUp,
        } = useLoginContext();
  return (
    <form>
      <Box
        sx={{
          border: "black 4px solid",
          marginTop: "150px",
          p: "20px",
        }}
      >
        <TextField
          fullWidth
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setEmail(e.target.value)}
          label={"Email"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          fullWidth
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUsername(e.target.value)}
          label={"Username"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          fullWidth
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(e.target.value)}
          label={"Password"}
          id="margin-normal"
          margin="normal"
        />

        <Button fullWidth type="submit" variant="contained" onClick={signUp}>
          Submit
        </Button>
        <Box component="div" sx={{ color: "red", paddingTop: "5px" }}>
          {errStatus ? errStatus : null}
        </Box>
        <Box component="div" sx={{ color: "green", paddingTop: "5px" }}>
          {loginStatus ? loginStatus : null}
        </Box>
      </Box>
    </form>
  );
};


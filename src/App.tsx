import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { IndexPage } from "./pages/Index";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { UserProfile } from "./pages/UserProfile";
import { AuthContextProvider } from "./features/auth/context/authContext";
import { ImageDisplay } from "./pages/test";

const theme = createTheme({
  palette: {
    primary: {
      main: "#305d78",
    },
    secondary: {
      main: "#b53866",
    },
    background: {
      default: "#b53866",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<ImageDisplay/>} />
            <Route path="/profile" element={<UserProfile/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

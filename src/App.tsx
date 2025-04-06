import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@mui/material";


const App = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px", gap: 8, p:4 }}> 
      <Header  />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Container>
  );
};

export default App;

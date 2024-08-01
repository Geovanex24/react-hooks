import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="about">About</Link> */}
      {/* <Link to="login">Login</Link> */}
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* Manejar excepciones */}

        {/* Opción 1 */}
        {/* <Route path="/*" element={<LoginPage />} /> */}

        {/* Opción 2 ✅ */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};

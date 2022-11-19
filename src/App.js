
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";
import AboutUs from "./components/about/AboutUs";
import { RequireAuth } from './RequireAuth';
import Container from "./components/authentication/Container";
import Login from "./components/authentication/Login";
import Profile from "./components/authentication/Profile";
import Register from "./components/authentication/Register";
import { Address } from "./components/landing/Address";
import Footer from "./components/landing/Footer";
import NavBar from "./components/landing/NavBar";
import Welcome from "./components/landing/Welcome";
import Notfound from "./components/404/Notfound";
import Contact from "./components/contact/Contact";
import UserPage from "./components/UserPage";
import Dashboard from "./components/Dashboard";
import HeaderServices from "./components/services/HeaderServices";
import OurServices from "./components/services/OurServices";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <AuthProvider>
        <Address />
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path='/profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path="/" element={<Welcome />} />
          <Route
            path="/login"
            element={
              <Container>
                <Login />
              </Container>
            }
          />
          <Route
            path="/register"
            element={
              <Container>
                <Register />
              </Container>
            }
          />

          <Route
            path="/UserPage"
            element={
              <UserPage />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />
          <Route
            path="/service"
            element={
              <>
                <HeaderServices />
                <OurServices />
                <Services />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;

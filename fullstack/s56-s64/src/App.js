import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <AppNavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Courses />} path="/courses" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Logout />} path="/logout" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

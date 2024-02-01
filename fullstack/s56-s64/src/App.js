import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import CourseView from "./pages/CourseView";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./UserContext";

function App() {
  const [user, setUser] = useState({
    id: null,
    email: null,
    isAdmin: null,
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  });

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Container fluid>
          <AppNavBar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Courses />} path="/courses" />
            <Route element={<CourseView />} path="/courses/:courseId" />
            <Route element={<Register />} path="/register" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Login />} path="/login" />
            <Route element={<Logout />} path="/logout" />
            <Route element={<Error />} path="*" />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;

import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <AppNavBar />
      <Container>
        <Login />
        {/* <Register /> */}
        {/* <Home />
        <Courses /> */}
      </Container>
    </>
  );
}

export default App;

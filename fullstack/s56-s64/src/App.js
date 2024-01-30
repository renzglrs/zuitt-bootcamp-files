import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <AppNavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="display-1 text-center">404</h1>
        <p>
          Go back to the <Link to="/">homepage</Link>
        </p>
      </div>
    </Container>
  );
}

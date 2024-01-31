import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000&t=st=1706691129~exp=1706691729~hmac=60c239c7ef76c0a22880d4538d8904a0e36b9f9c3a9de6f78aeacb1b7b88180d"
          alt="404"
          className="img-fluid w-75"
        />
        <p>
          Go back to the <Link to="/">homepage</Link>
        </p>
      </div>
    </Container>
  );
}

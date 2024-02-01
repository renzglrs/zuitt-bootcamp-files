import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner({ data }) {
  const { title, content, destination, label } = data;

  return (
    <Row className="text-center m-5">
      <Col>
        <h1>{title}</h1>
        <p>{content}</p>
        <Link className="btn btn-primary" to={destination}>
          {label}
        </Link>
      </Col>
    </Row>
  );
}

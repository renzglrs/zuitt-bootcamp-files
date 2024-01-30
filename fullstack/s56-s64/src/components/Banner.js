// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Row, Col, Button } from "react-bootstrap";

export default function Banner() {
  return (
    <Row className="text-center m-5">
      <Col>
        <h1>Zuitt Coding Bootcamp</h1>
        <p>Opportunities for everyone, everywhere!</p>
        <Button variant="primary">Enroll Now!</Button>
      </Col>
    </Row>
  );
}

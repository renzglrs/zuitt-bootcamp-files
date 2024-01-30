import { Row, Col, Card, Button } from "react-bootstrap";

export default function CourseCard() {
  return (
    <Row>
      <Col>
        <Card id="courseComponent1">
          <Card.Body>
            <Card.Title>Sample Course</Card.Title>
            <Card.Subtitle>Description:</Card.Subtitle>
            <Card.Text>This is a sample course offering</Card.Text>
            <Card.Subtitle>Price:</Card.Subtitle>
            <Card.Text>PhP 40,000</Card.Text>
            <Button variant="primary">Enroll</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

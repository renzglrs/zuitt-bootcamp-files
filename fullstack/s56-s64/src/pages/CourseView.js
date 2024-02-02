import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

export default function CourseView() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // retrieve the course id in the params/url -> :courseId
  const { courseId } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/specific/${courseId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setName(data.course.name);
        setDescription(data.course.description);
        setPrice(data.course.price);
      });
  }, []);

  const enroll = (courseId) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        enrolledCourses: [{ courseId }],
        totalPrice: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Enrollment successful") {
          Swal.fire({
            title: "Successfully enrolled",
            icon: "success",
            text: "You have successfully enrolled for this course.",
          });

          navigate("/courses");
        } else if (data.error === "Access forbidden.") {
          Swal.fire({
            title: "Oh no!",
            icon: "error",
            text: "An admin cannot enroll to a course.",
          });
        } else {
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            text: "Please try again.",
          });
        }
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Subtitle>Price:</Card.Subtitle>
              <Card.Text>PhP {price}</Card.Text>
              <Card.Subtitle>Class Schedule</Card.Subtitle>
              <Card.Text>8 am - 5 pm</Card.Text>
              {user.id !== null ? (
                <Button variant="primary" onClick={() => enroll(courseId)}>
                  Enroll
                </Button>
              ) : (
                <Link className="btn btn-info text-white" to="/login">
                  Login to Enroll
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

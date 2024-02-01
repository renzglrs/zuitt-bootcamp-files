import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(UserContext);

  return user.id === null ? (
    <Navigate to="/login" />
  ) : (
    <Row>
      <Col className="p-5 bg-primary text-white">
        <h1 className="my-5 ">Profile</h1>
        <h2 className="mt-3">James Dela Cruz</h2>
        <hr />
        <h4>Contacts</h4>
        <ul>
          <li>Email: {user.email}</li>
          <li>Mobile No: 09266772411</li>
        </ul>
      </Col>
    </Row>
  );
}

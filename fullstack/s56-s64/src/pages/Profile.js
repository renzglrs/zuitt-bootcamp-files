import { useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(UserContext);

  return user.token === null ? (
    <Navigate to="/login" />
  ) : (
    <Container className="my-5 p-5 bg-primary text-white">
      <h1>Profile</h1>
      <h2>John Smith</h2>
      <div className="border border-bottom"></div>
      <h3>Contacts</h3>
      <ul>
        <li>Email: jamesDC@mail.com</li>
        <li>Mobile No: 09123456789</li>
      </ul>
    </Container>
  );
}

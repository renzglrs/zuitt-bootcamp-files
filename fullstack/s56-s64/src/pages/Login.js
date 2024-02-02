import { useState, useEffect, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  // State hooks to store values of the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State management to enable and disable register button
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Validation for submit button
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  const authenticate = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.access) {
          // Storing the token of the authenticated user in the browser's local storage.
          localStorage.setItem("token", data.access);
          // setUser(data.access);
          retrieveUserDetails(data.access);

          Swal.fire({
            title: "Login Successful",
            text: "Wellcome to Zuitt",
            icon: "success",
          });
        } else if (data.error == "No email Found.") {
          Swal.fire({
            title: "Oh, no!",
            text: "Your email is not registered",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Something went wrong.!",
            text: "Please try again later.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        // error;
        alert("failed");
      });
  };

  const retrieveUserDetails = (token) => {
    fetch("http://localhost:4000/users/details", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data._id);

        setUser({
          id: data._id,
          email: data.email,
          isAdmin: data.isAdmin,
        });
      });
  };

  return user.id !== null ? (
    <Navigate to="/courses" />
  ) : (
    <Container className="my-3 p-3 p-md-5 w-50">
      <h1>Login</h1>
      <Form onSubmit={(e) => authenticate(e)}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        {/* Conditional Rendering -> ternary operator */}
        {isActive ? (
          <Button variant="success" type="submit">
            Login
          </Button>
        ) : (
          <Button variant="secondary" type="submit" disabled>
            Login
          </Button>
        )}
      </Form>
    </Container>
  );
}

import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State management to enable and disable register button
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  function loginUser(e) {
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
          alert("Success");
        } else {
          alert("Failed");
        }
      })
      .catch((error) => {
        // error;
        alert("failed");
      });
  }

  return (
    <>
      <Container className="my-3 p-3 p-md-5 w-50">
        <h1>Login</h1>
        <Form onSubmit={(e) => loginUser(e)}>
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
            <Button variant="success" type="submit" disabled>
              Login
            </Button>
          )}
        </Form>
      </Container>
    </>
  );
}

import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

export default function Register() {
  const { user, setUser } = useContext(UserContext);

  // State hooks to store values from input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State management to enable and disable register button
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      mobileNo !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword &&
      mobileNo.length === 11
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  function registerUser(e) {
    // Prevents page redirection via form submission
    e.preventDefault();

    fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNo: mobileNo,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.access);

        if (data.access) {
          // Storing the token of the authenticated user in the browser's local storage.
          localStorage.setItem("token", data.access);
          setUser(data.access);

          alert("You are now logged in.");
        }

        if (data.message === "Registered successfully!") {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobileNo("");
          setPassword("");
          setConfirmPassword("");

          alert("You are now registered!");
        } else if (data.error === "Email Invalid.") {
          alert("Email is invalid");
        } else if (data.error === "Mobile number invalid.") {
          alert("Mobile number is invalid");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      });
  }

  return user.token !== null ? (
    <Navigate to="/courses" />
  ) : (
    <Container className="my-3 p-3 p-md-5 w-50">
      <h1>Registration</h1>
      <Form onSubmit={(e) => registerUser(e)}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLasttName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter 11 digit number"
            required
            value={mobileNo}
            onChange={(e) => {
              setMobileNo(e.target.value);
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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Passwordumber</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>

        {/* Conditional Rendering -> ternary operator */}
        {isActive ? (
          <Button variant="primary" type="submit">
            Register
          </Button>
        ) : (
          <Button variant="secondary" type="submit" disabled>
            Register
          </Button>
        )}
      </Form>
    </Container>
  );
}

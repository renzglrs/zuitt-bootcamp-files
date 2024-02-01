import { useState, useEffect, useContext } from "react";
import { Form, Button, Container, Nav } from "react-bootstrap";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(UserContext);

  return user.token === null ? (
    <Navigate to="/login" />
  ) : (
    <Container className="my-5 p-5 bg-primary text-white">
      <h1>Profile</h1>
    </Container>
  );
}

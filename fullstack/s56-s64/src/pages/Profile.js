import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";
import UpdateProfile from "../components/UpdateProfile";

export default function Profile() {
  const { user } = useContext(UserContext);

  const [getUser, setUser] = useState([]);

  const fetchData = () => {
    // get user details
    const token = localStorage.getItem("token"); // Replace with your actual JWT token
    fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return user.id === null ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Row>
        <Col className="p-5 bg-primary text-white">
          <h1 className="my-5 ">Profile</h1>
          <h2 className="mt-3">{`${getUser.firstName} ${getUser.lastName}`}</h2>
          <hr />
          <h4>Contacts</h4>
          <ul>
            <li>Email: {getUser.email}</li>
            <li>Mobile No: {getUser.mobileNo}</li>
          </ul>
        </Col>
      </Row>

      <Row className="pt-4 mt-4">
        <Col>
          <ResetPassword />
        </Col>
      </Row>

      <Row className="pt-4 mt-4">
        <Col>
          <UpdateProfile fetchData={fetchData} />
        </Col>
      </Row>
    </>
  );
}

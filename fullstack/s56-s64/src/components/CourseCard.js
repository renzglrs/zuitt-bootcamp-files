import { Card, Button } from "react-bootstrap";
// useState
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ courseProp }) {
  // console.log("This data was passed:");
  // console.log(courseProp);

  // Destructured course properties
  const { _id, name, description, price } = courseProp;

  // Syntax
  // const [getter, setter] = useState(initialGetterValue);

  // const [count, setCount] = useState(0);
  // console.log(count);

  // const enroll = () => {
  //   if (count === 20) {
  //     alert("No more slots available");
  //   } else {
  //     setCount(count + 1);
  //     console.log("Enrollees: " + count);
  //   }
  // };

  return (
    <Card id="courseComponent1" className="p-3 my-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Description:</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle>Price:</Card.Subtitle>
        <Card.Text>PhP {price}</Card.Text>
        <Link className="btn btn-primary" to={`/courses/${_id}`}>
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}

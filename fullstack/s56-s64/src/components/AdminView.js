import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function AdminView({ coursesData }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const courseArr = coursesData.map((course) => {
      return (
        <tr key={course._id}>
          <td>{course._id}</td>
          <td>{course.name}</td>
          <td>{course.description}</td>
          <td>{course.price}</td>
          <td className={course.isActive ? "text-success" : "text-danger"}>
            {course.isActive ? "Available" : "Unavailable"}
          </td>
          <td>
            <button className="btn btn-primary ">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Archive</button>
          </td>
        </tr>
      );
    });

    setCourses(courseArr);
  }, [coursesData]);

  return (
    <>
      <h1> Admin Dashboard</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{courses}</tbody>
      </Table>
    </>
  );
}

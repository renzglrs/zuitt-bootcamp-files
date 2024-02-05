import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import EditCourse from "./EditCourse";
import ArchiveCourse from "./ArchiveCourse";

export default function AdminView({ coursesData, fetchData }) {
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
            <EditCourse course={course._id} fetchData={fetchData} />
          </td>
          <td>
            <ArchiveCourse course={course} fetchData={fetchData} />
          </td>
        </tr>
      );
    });

    setCourses(courseArr);
  }, [coursesData, fetchData]);

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

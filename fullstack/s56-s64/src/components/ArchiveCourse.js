import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function ArchiveCourse({ course, fetchData }) {
  const courseId = course._id;

  const archiveToggle = (course) => {
    if (course.isActive) {
      fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/archive`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Course archived successfully!") {
            Swal.fire({
              title: "Success!",
              icon: "success",
              text: data.message,
            });
            fetchData();
          } else {
            Swal.fire({
              title: "Something went wrong!",
              icon: "error",
              text: data.error,
            });
            fetchData();
          }
        });
    }
  };

  const activateToggle = (course) => {
    if (course.isActive !== true) {
      fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/activate`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Course activated successfully!") {
            Swal.fire({
              title: "Success!",
              icon: "success",
              text: data.message,
            });
            fetchData();
          } else {
            Swal.fire({
              title: "Something went wrong!",
              icon: "error",
              text: data.error,
            });
            fetchData();
          }
        });
    }
  };

  return (
    <>
      {course.isActive ? (
        <Button variant="danger" onClick={() => archiveToggle(course)}>
          Archive
        </Button>
      ) : (
        <Button variant="success" onClick={() => activateToggle(course)}>
          Activate
        </Button>
      )}
    </>
  );
}

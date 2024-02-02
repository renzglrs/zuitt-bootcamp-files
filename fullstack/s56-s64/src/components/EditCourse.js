import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

export default function EditCourse({ course, fetchData }) {
  const [courseId, setCourseId] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  // useState for modal to open/close
  const [showEdit, setShowEdit] = useState(false);

  const openEdit = (courseId) => {
    setShowEdit(true);

    fetch(`${process.env.REACT_APP_API_URL}/courses/specific/${courseId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setCourseId(data.course._id);
        setName(data.course.name);
        setDescription(data.course.description);
        setPrice(data.course.price);
      });
  };

  const closeEdit = () => {
    setShowEdit(false);
    setName("");
    setDescription("");
    setPrice("");
  };

  const editCourse = (e, courseId) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Course Updated successfully!") {
          Swal.fire({
            title: "Success!",
            icon: "success",
            text: "Course Successfully Updated",
          });

          closeEdit();
          fetchData();
        } else {
          Swal.fire({
            title: "Oh no!!",
            icon: "error",
            text: "Please try again!",
          });

          closeEdit();
          fetchData();
        }
      });
  };

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => openEdit(course)}>
        Edit
      </Button>

      <Modal show={showEdit} onHide={closeEdit}>
        <Form onSubmit={(e) => editCourse(e, courseId)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEdit}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

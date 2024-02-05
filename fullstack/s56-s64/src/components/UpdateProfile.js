import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateProfile = ({ user, fetchData }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    mobileNo: user.mobileNo,
  });

  console.log("FETCH");
  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Replace with your actual JWT token
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Profile updated successfully!",
        });
        fetchData();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        icon: "error",
        title: "Oh no!",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="container">
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdateProfile} className="d-flex flex-column gap-3 mb-5 pb-5">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            // value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            // value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            id="mobileNo"
            name="mobileNo"
            // value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Update Profile
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default UpdateProfile;

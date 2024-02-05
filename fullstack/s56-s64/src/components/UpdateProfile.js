import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateProfile = ({ fetchData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token"); // Replace with your actual JWT token
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobileNo,
        }),
      });

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
    <div className="container d-flex flex-column gap-3 mb-5 pb-5">
      <h2>Update Profile</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNo">Mobile Number:</label>
        <input
          type="text"
          className="form-control"
          id="mobileNo"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary d-block" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;

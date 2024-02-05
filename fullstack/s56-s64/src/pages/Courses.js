import { useEffect, useState, useContext } from "react";
import UserView from "../components/UserView";
import AdminView from "../components/AdminView";
import UserContext from "../UserContext";

export default function Courses() {
  // checkes to see if the mock data was captured
  // console.log(coursesData);

  const { user } = useContext(UserContext);

  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    // get all active courses
    fetch(`${process.env.REACT_APP_API_URL}/courses/all`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        const courseArr = data.map((course) => {
          return course;
        });

        setCourses(courseArr);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      {user.isAdmin === true ? (
        <AdminView coursesData={courses} fetchData={fetchData} />
      ) : (
        <UserView coursesData={courses} />
      )}

      {/* <AdminView coursesData={courses} /> */}
    </>
  );
}

// The "course" in the CourseCard component is called a "prop" which is a shorthand for "property" since components are considered as objects in React JS
// The curly braces ({}) are used for props to signify that we are providing information using JavaScript expressions rather than hard coded values which use double quotes ("")
// We can pass information from one component to another using props. This is referred to as "props drilling"

//   3 HOOKS
/* 
    1. useState
    2. useEffect
    3. useContext
*/

// map method -> loops
// const courses1 = coursesData.map((course) => {
//   return <CourseCard key={course.id} courseProp={course} />;
// });

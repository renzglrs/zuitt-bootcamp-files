import coursesData from "../data/coursesData";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Courses() {
  // checkes to see if the mock data was captured
  // console.log(coursesData);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Get all active courses
    fetch(`${process.env.REACT_APP_API_URL}/courses`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setCourses(
          data.map((course) => {
            return <CourseCard key={course._id} courseProp={course} />;
          })
        );
      });
  }, []);

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

  return (
    <Container className="py-5">
      <h1>Courses</h1>
      {courses}
    </Container>
  );
}

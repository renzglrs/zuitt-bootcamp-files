import coursesData from "../data/coursesData";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  // checkes to see if the mock data was captured
  console.log(coursesData);

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
  const courses = coursesData.map((course) => {
    return <CourseCard key={course.id} courseProp={course} />;
  });

  return (
    <>
      <h1>Courses</h1>
      {courses}
      {/* {coursesData.map((course) => {
        return <CourseCard key={course.id} courseProp={course} />;
      })} */}
    </>
  );
}

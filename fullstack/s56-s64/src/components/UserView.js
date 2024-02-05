import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import CourseSearch from "./CourseSearch";
import CourseSearchByPrice from "./CourseSearchByPrice";

export default function UserView({ coursesData }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesArr = coursesData.map((course) => {
      if (course.isActive == true) {
        return <CourseCard key={course._id} courseProp={course} />;
      } else {
        return null;
      }
    });

    setCourses(coursesArr);
  }, [coursesData]);

  return (
    <>
      <CourseSearch />
      <CourseSearchByPrice />
      {courses}
    </>
  );
}

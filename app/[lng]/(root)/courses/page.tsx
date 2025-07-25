import React from "react";
import TopBar from "@/components/shared/top-bar";
import AllCourses from "./_components/all-courses";
const CoursesPage = () => {
  return (
    <>
      <TopBar label="allCourses" description="allCourseDescription" />
      <AllCourses />
    </>
  );
};

export default CoursesPage;

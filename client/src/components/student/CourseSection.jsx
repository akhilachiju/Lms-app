import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import AppContext from "../../context/AppContext";

const CourseSection = () => {
  const { allCourses, fetchAllCourses } = useContext(AppContext);

  // fetch courses when this component mounts (if not already loaded)
  useEffect(() => {
    if (allCourses.length === 0) {
      fetchAllCourses();
    }
  }, [allCourses, fetchAllCourses]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 xs:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 text-black">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base">
            Choose from a wide range of courses designed to help you learn new
            skills, upgrade your knowledge, and achieve your career goals.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mb-10">
          {allCourses.slice(0, 8).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            to="/course-list"
            onClick={() => scrollTo(0, 0)}
            className="inline-block border bg-black border-white text-white 
                       px-5 py-2.5 xs:px-6 xs:py-3 rounded-full font-medium
                       text-sm xs:text-base hover:scale-105 transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;

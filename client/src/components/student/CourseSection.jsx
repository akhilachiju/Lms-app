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
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 mb-12">
            Choose from a wide range of courses designed to help you learn new
            skills, upgrade your knowledge, and achieve your career goals.
          </p>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {allCourses.slice(0, 4).map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          {/* Button */}
          <Link
            to="/course-list"
            onClick={() => scrollTo(0, 0)}
            className="inline-block border bg-black border-white text-white px-6 py-3 rounded-full font-medium"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;

import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchBar from "../../components/student/SearchBar";
import right from "../../assets/right.png";

const CourseList = () => {
  const { allCourses, fetchAllCourses } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16); // show first 16

  // fetch courses if not loaded yet
  useEffect(() => {
    if (allCourses.length === 0) {
      fetchAllCourses();
    }
  }, [allCourses, fetchAllCourses]);

  // filter courses based on search term
  useEffect(() => {
    setFilteredCourses(
      allCourses.filter((course) =>
        (course.courseTitle || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
    setVisibleCount(16); // reset visible count when search changes
  }, [allCourses, searchTerm]);

  // handler for loading more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Heading + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">
            All Courses{" "}
            <span className="text-gray-500 font-medium">
              ({filteredCourses.length})
            </span>
          </h1>
          <SearchBar
            className="w-full sm:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
              {filteredCourses.slice(0, visibleCount).map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredCourses.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center justify-center gap-2  border bg-black border-white text-white px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition"
                >
                  Load More
                  <img src={right} alt="arrow_icon" className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-500 text-lg">No courses available.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseList;

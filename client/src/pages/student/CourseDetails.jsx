import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Breadcrumbs from "../../components/Breadcrumbs";

const CourseDetails = () => {
  const { allCourses, fetchAllCourses } = useContext(AppContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (allCourses.length === 0) {
      fetchAllCourses();
    } else {
      const selectedCourse = allCourses.find((c) => c._id === courseId);
      setCourse(selectedCourse);
    }
  }, [allCourses, courseId, fetchAllCourses]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">Loading course details...</p>
      </div>
    );
  }

  const discountedPrice = (
    course.coursePrice *
    (1 - course.discount / 100)
  ).toFixed(2);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12">
      <Breadcrumbs />

      {/* Course Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{course.courseTitle}</h1>
          <p className="text-gray-500 mb-4">
            Price: <span className="line-through">${course.coursePrice}</span>{" "}
            <span className="font-semibold text-green-600">
              ${discountedPrice}
            </span>
          </p>
          <p
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: course.courseDescription }}
          ></p>
          <p className="text-gray-500 mb-2">
            Enrolled Students: {course.enrolledStudents.length}
          </p>
          <p className="text-gray-500 mb-2">
            Average Rating:{" "}
            {course.courseRatings.length > 0
              ? (
                  course.courseRatings.reduce((a, r) => a + r.rating, 0) /
                  course.courseRatings.length
                ).toFixed(1)
              : "Not rated yet"}
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Course Content</h2>
        {course.courseContent.map((chapter) => (
          <div key={chapter.chapterId} className="mb-4 border-b pb-4">
            <h3 className="font-semibold mb-2">
              {chapter.chapterOrder}. {chapter.chapterTitle}
            </h3>
            <ul className="list-disc list-inside">
              {chapter.chapterContent.map((lecture) => (
                <li key={lecture.lectureId} className="mb-1">
                  {lecture.lectureOrder}. {lecture.lectureTitle} -{" "}
                  {lecture.lectureDuration} min{" "}
                  {lecture.isPreviewFree && (
                    <span className="text-green-500">(Preview Free)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;

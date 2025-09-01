import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  const { average, count } = calculateRating(course);

  const finalPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
    >
      {/* Thumbnail */}
      <img
        src={course.courseThumbnail}
        alt={`Thumbnail of ${course.courseTitle}`}
        className="w-full h-50 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow items-start">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2 text-left">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{course.educator.name}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="text-sm font-medium mr-1">{average}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.round(average) ? assets.star : assets.star_blank}
                alt={i < Math.round(average) ? "filled star" : "empty star"}
                className="w-4 h-4"
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({count})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center">
          <p className="text-lg font-bold text-black">
            {currency}{finalPrice}
            {course.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {currency}{course.coursePrice}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

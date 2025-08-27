import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  // Discounted price
  const finalPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
    >
      {/* Thumbnail */}
      <img
        src={course.courseThumbnail}
        alt={course.courseTitle}
        className="w-full h-50 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{course.educator.name}</p>

        {/* Rating */}
        <div className="flex items-center mt-2 justify-start">
          <span className="text-sm font-medium mr-1">4.5</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">(122)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex justify-start items-center">
          <p className="text-lg font-bold text-black">
            {currency}
            {finalPrice}
            {course.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {currency}
                {course.coursePrice}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

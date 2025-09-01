import { createContext, useState, useEffect, useCallback } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);


  // Fetch All Courses (dummy for now)
  const fetchAllCourses = async () => {
    // later replace with API call
    setAllCourses(dummyCourses);
  };

  // Rating calculation (memoized)
  const calculateRating = useCallback((course) => {
    if (!course?.courseRatings || course.courseRatings.length === 0) {
      return { average: 0, count: 0 };
    }
    const total = course.courseRatings.reduce((sum, r) => sum + r.rating, 0);
    const average = total / course.courseRatings.length;

    return {
      average: Number(average.toFixed(1)),
      count: course.courseRatings.length,
    };
  }, []);

  // Load courses once
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    fetchAllCourses,
    isEducator, 
    setIsEducator,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;

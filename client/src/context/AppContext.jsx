import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  // Fetch All Courses (for now just using dummy data)
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Load courses when provider mounts
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = { 
    currency, 
    allCourses, 
    fetchAllCourses // <- expose so child components can manually refresh if needed
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

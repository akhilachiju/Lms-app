import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import AddCourse from "./pages/educator/AddCourse";
import Dashboard from "./pages/educator/Dashboard";
import MyCourse from "./pages/educator/MyCourse";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";
import Footer from "./components/student/Footer";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      {!isEducatorRoute && <Navbar />}
      <div className="flex-1">
        {/* <-- this pushes footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />

          <Route path="/educator" element={<Educator />}>
            <Route index element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-course" element={<MyCourse />} />
            <Route path="student-enrolled" element={<StudentsEnrolled />} />
          </Route>

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

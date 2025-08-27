import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import CourseCard from '../../components/student/CourseCard'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CourseSection/>
      <Companies/>
      {/*<CourseCard/> */}
    </div>
  )
}

export default Home
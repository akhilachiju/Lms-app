import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CourseSection/>
      <TestimonialSection/>
      <Companies/>
      <CallToAction/>
      <Footer />
    </div>
  )
}

export default Home
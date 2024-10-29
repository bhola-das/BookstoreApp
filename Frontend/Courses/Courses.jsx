import React from 'react'
import Navbar from '../src/components/Navbar'
import Course from '../src/components/Course'
import Footer from '../src/components/Footer'


const Courses = () => {
  return (
    <>
    <Navbar />
      <div className= "min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  )
}

export default Courses
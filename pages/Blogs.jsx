import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import NavWhite from '../components/Navwhite'
import Talk from './../components/Talk';

const Blogs = () => {
  return (
    <div>
      <NavWhite />
      <Blog />
      <Talk/>
      <Footer />
    </div>
  )
}

export default Blogs

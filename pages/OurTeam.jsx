import React from 'react'
import Footer from '../components/Footer'
import Navwhite from '../components/Navwhite'
import Team from '../components/Team'
import Bar from './../components/Bar'
import Talk from './../components/Talk'

const OurTeam = () => {
  return (
    <div className='w-full h-full'>
      <Navwhite />
      <Bar />
      <Team />
      <Talk />
      <Footer />
    </div>
  )
}

export default OurTeam

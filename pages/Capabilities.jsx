import React from 'react'
import Connect from '../components/Connect'
import Formular from '../components/Formular'
import Management from '../components/Management'
import Navwhite from '../components/Navwhite'
import Pricing from '../components/Pricing'
import Footer from './../components/Footer'

const Capabilities = () => {
  return (
    <div className='w-full'>
      <Navwhite />
      <Management />
      <Formular />
      <Pricing />
      <Connect />
      <Footer />
    </div>
  )
}

export default Capabilities

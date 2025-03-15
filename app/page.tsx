

import React from 'react'
import Home from './components/Home'
import Logo from './components/Logo'
import Features from './components/Features'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <div> <Home/>
    <Logo/>
    <Features/>
    <Faq/>
    <Testimonials/>
    </div>
  )
}

export default page
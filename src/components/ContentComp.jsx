import React from 'react'
import { Route, Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/Aboutpage'
import ContactPage from './pages/ContactPage'
import LoadingPage from './pages/LoadingPage'

const ContentComp = () => {
  return (
    <div className='border-2 bg-gray-700 w-full h-auto'>
      <LoadingPage />
      {/* <Router>
        <HomePage />
        <AboutPage />
        <ContactPage />
      </Router> */}
    </div>
  )
}

export default ContentComp

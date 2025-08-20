import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// 1. LAZY LOADING - Replace regular imports with lazy imports
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

import LoadingPage from './pages/LoadingPage'
import NotFoundPage from './pages/NotFoundPage' // You might want to create this

// Optional: Navigation component
import NavigationComp from './NavigationComp' // If you have a navigation component


const ContentComp = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Router>
        {/* Optional: Add Temp navigation bar that persists across routes */}
        {/* <NavigationComp /> */}

        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {/* Home route */}
            <Route path="/" element={<HomePage />} />
            
            {/* About route */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* Contact route */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Redirect /home to / for consistency */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/Dairy-Nearby/" element={<Navigate to="/" replace />} />
            
            {/* 404 Not Found route - should be last */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default ContentComp
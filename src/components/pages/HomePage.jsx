import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageGalleryElem from './HomePageElement/ImageGalleryElem'

const HomePage = () => {
  const navigate = useNavigate() // Hook must be inside the component

  const handleButtonClick = () => {
    navigate('/about') // Navigate programmatically
  }

  const handleContactRedirect = () => {
    navigate('/contact')
  }

  return (
    <div className="p-8">
      <ImageGalleryElem />
    </div>
  )
}

export default HomePage
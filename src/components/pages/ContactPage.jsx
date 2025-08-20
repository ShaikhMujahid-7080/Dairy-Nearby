import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Process form data here...
    console.log('Form submitted:', formData)
    
    // Navigate after successful submission
    navigate('/', { 
      state: { message: 'Thank you for contacting us!' }
    })
  }

  const handleGoBack = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="p-8">
      <h1>Contact Us</h1>
      
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="block w-full p-2 border rounded"
        />
        
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="block w-full p-2 border rounded"
        />
        
        <div className="space-x-4">
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit & Go Home
          </button>
          
          <button 
            type="button"
            onClick={handleGoBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactPage
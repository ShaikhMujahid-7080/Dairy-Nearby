// App.jsx

import React from 'react'
import NavbarComp from './components/NavbarComp';
import SidebarComp from './components/SidebarComp';
import ContentComp from './components/ContentComp';

const App = () => {
  return (
    // Main container uses flex-col to stack navbar on top of the main content area
    <div className="flex flex-col h-screen bg-gray-100"> 
      <NavbarComp />
      {/* This div holds both the sidebar and the main content */}
      <div className="flex flex-1 overflow-hidden"> {/* flex-1 makes this div grow to fill remaining space */}
        <SidebarComp />
        {/* This div will wrap your content and handle scrolling */}
        <div className="flex-1 overflow-y-auto p-6"> {/* flex-1 makes it take remaining width, overflow-y-auto makes it scrollable */}
          <ContentComp />
        </div>
      </div>
    </div>
  )
}

export default App;
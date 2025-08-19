import React from 'react'
import HeaderComp from './components/HeaderComp'
import ContentComp from './components/ContentComp'
import FooterComp from './components/FooterComp'

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderComp />
        {/* This div holds both the sidebar and the main content */}
        <div className="flex flex-1 overflow-hidden"> 
          <ContentComp />
        </div>
      </div>
      <FooterComp />
    </>
  )
}

export default App

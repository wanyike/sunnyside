import React from "react"

import Header from "./components/Header"
import "tailwindcss/tailwind.css"
import Showcase from "./components/Showcase"
import Transform from "./components/Transform"
import StandOut from "./components/StandOut"
import GraphicMobile from "./components/GraphicMobile"
import GraphicDesktop from "./components/GraphicDesktop"
import Testimonials from "./components/Testimonials"
import GridMobile from "./components/GridMobile"
import GridDesktop from "./components/GridDesktop"
const App = () => {
  return (
    <> 
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      {/* <div className="block md:hidden">
      <GraphicMobile />
      </div> */}
      <div className="block md:block">
        <GraphicDesktop />
      </div>
      <Testimonials />

      {/* <div className="block md:hidden">
        <GridMobile />
      </div> */}

      <div className="block md:block">
        <GridDesktop />
      </div>
      
      
    </>
  )
}

export default App;

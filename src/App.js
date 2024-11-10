import React from "react"

import Header from "./components/Header"
import "tailwindcss/tailwind.css"
import Showcase from "./components/Showcase"
import Transform from "./components/Transform"
import StandOut from "./components/StandOut"
import GraphicMobile  from "./components/GraphicMobile"

const App = () => {
  return (
    <> 
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      <GraphicMobile />
    </>
  )
}

export default App;

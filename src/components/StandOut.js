import standOutMobile from "../images/mobile/image-stand-out.jpg"

import standOutDesktop from "../images/desktop/image-stand-out.jpg"

import React from 'react'

const StandOut = () => {
  return (
      <>
          <section className="">
              <div className="">
                  <picture className="">
                      
                      <source media="(min-width: 768px) " srcSet={standOutDesktop} alt="" />
                      <img className="" src={standOutMobile} alt="" />
                  </picture>
                  
                  <div className="p-5 text-center">
                      <h2 className="text-2xl my-5">
                      Stand out to the right audience
                      </h2>
                      <p className="mb-5">
                      Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                      </p>

                      <button className="btn-StandOut">Learn More</button>

                  </div>
               </div>
          </section>
      </>
  )
}

export default StandOut
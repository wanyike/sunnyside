import transformMobile from "../images/mobile/image-transform.jpg"

import transformDesktop from "../images/desktop/image-transform.jpg"

import React from 'react'

const Transform = () => {
  return (
      <>
          <section className="items-center">
              <div className="lg:flex flex-row-reverse items-center">
                  <picture className="w-1/2">
                      
                      <source media="(min-width: 768px) " srcSet={transformDesktop} alt="" />
                      <img className="" src={transformMobile} alt="" />
                  </picture>
                  
                  <div className="p-5 text-center lg:text-left lg:w-1/2">
                      <h2 className="text-2xl my-5 lg:text-5xl  mb-10 font-serif font-bold  ml-20 mr-20">
                          Transform your brand
                      </h2>
                      <p className="mb-8  ml-20 mr-20">
                      We are a full-service creative agency specializing in helping brands grow fast. 
                      Engage your clients through compelling visuals that do most of the marketing for you.
                      </p>

                      <button className="btn-transform lg:text-2xl mt-8 font-serif ml-20 mr-20">Learn More</button>

                  </div>
               </div>
          </section>
      </>
  )
}

export default Transform
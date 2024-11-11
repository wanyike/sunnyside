import { useState } from "react";
import { testimonials } from "../data/testimonials";

import React from 'react'

const Testimonials = () => {

    const [people, setPeople] = useState(testimonials)
  return (
      <>
          <section className="py-9 px-4 lg:py-16">
              <h2 className="testimonial-header text-2xl uppercase tracking-widest text-center">Client Testimonials</h2>

              <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto">
                  {people.map(({ id, name, image, about, title}) => (
                      <article key={id}>
                          <img src={image} alt={name} className="w-20 rounded-full block mx-auto mt-10 mb-5" />
                          <p className="text-center mb-4">{about}</p>
                          <h4 className="text-center">{name}</h4>
                          <small className="text-center block">{title}</small>
                      </article>
                  ))}
              </div>

              
              


          </section>
      </>
  )
}

export default Testimonials
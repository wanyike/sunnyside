import { useState } from "react";
import { testimonials } from "../data/testimonials";

import React from 'react'

const Testimonials = () => {

    const [people, setPeople] = useState(testimonials)
  return (
      <>
          <section className="">
              <h2 className="testimonial-header text-2xl uppercase tracking-widest text-center">Client Testimonials</h2>

              <div>
                  {people.map(({ id, name, image, about, title}) => (
                      <article key={id}>
                          <img src={image} alt={name} />
                          <p>{about}</p>
                          <h4 className="">{name}</h4>
                          <small>{title}</small>
                      </article>
                  ))}
              </div>
          </section>
      </>
  )
}

export default Testimonials
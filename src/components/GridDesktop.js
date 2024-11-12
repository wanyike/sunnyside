import { useState } from "react";

import { gridDesktop } from "../data/grid"

import React from 'react'

const GridDesktop = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(gridDesktop)

    return (
      <>
     <section className="grid grid-cols-2">
                {cards.map(({ id, image }) => (
                    <article key={id}>
                        <img src={image} alt="" />
                    </article>   
                ) 
                )}
     </section>
    </>
  )
}

export default GridDesktop

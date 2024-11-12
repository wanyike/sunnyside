import { useState } from "react";

import { gridMobile } from "../data/grid"

import React from 'react'

const GridMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(gridMobile)

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

export default GridMobile

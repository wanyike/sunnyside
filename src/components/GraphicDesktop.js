import { useState } from "react";
import { graphicData } from "../data/Graphic";

import React from "react";

const GraphicData = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicData);
    return (
        <>
            <section className="graphic md:flex items-center justify-center">
                {cards.map(({ id, image, title, text }) => (
                    <article key={id} className="relative">
                        <img src={image} alt={title} />
                        <div className="absolute bottom-4 left-0 text-center">
                            <h3 className="text-xl mb-5 font-extrabold font-serif">{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}

export default GraphicData;

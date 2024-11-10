import { useState } from "react";
import { GraphicMobile as graphicData } from "../data/graphic"; // Renamed import

import React from "react";

const GraphicMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicData); // Use renamed import
    return (
        <>
            <section className="">
                {cards.map(({ id, image, title, text }) => (
                    <article key={id}>
                        <img src={image} alt={title} />
                        <div className="">
                            <h3 className="">{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}

export default GraphicMobile;

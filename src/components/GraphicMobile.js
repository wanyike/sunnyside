import { useState } from "react";
import { graphicData } from "../data/graphic";

import React from "react";

const GraphicData = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicData);
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

export default GraphicData;

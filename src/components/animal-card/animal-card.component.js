import React from "react";

export const AnimalCard = ({ name, image, id, likes = 0, like }) => (
  <article>
    <figure>
      <strong>{image}</strong>
      {/*
        <img src={image} alt={`Image of a ${name}.`}/>
      */}
    </figure>
    <figcaption>{name}</figcaption>
    <button onClick={() => like(id)}>Like</button>
    <output>{likes}</output>
  </article>
);
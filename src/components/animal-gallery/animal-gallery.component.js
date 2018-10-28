import React from "react";

export const AnimalGallery = ({ animals, render }) => (
  <section >
    {animals.map(animal => render(animal))}
  </section>
);